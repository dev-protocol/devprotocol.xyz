const BigNumber = require('bignumber.js')
const R = require('ramda')
const fs = require('fs')
const fetch = require('node-fetch')

// Define `fetchAll` function to fetch all data from TheGraph
const fetchAll = async (endpoint) =>
  new Promise((resolve) => {
    let data = []
    const f = async (timestamp = 0) => {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({
          query: `{
              totalLockedAmounts(first: 1000, orderBy: timestamp, orderDirection: asc, where:{timestamp_gt: ${timestamp}}) {
                  id
                  timestamp
                  amount
              }
          }`,
        }),
      })
      const json = await res.json()
      if (json.data.totalLockedAmounts.length) {
        console.log('respond', json.data.totalLockedAmounts.length)
        const items = json.data.totalLockedAmounts.map(
          ({ timestamp, amount, id }) => ({
            id,
            timestamp,
            amount: new BigNumber(amount).div(1e18).toNumber(),
          })
        )
        data = [...data, ...items]
        f(items[items.length - 1].timestamp)
      } else {
        console.log('finish', endpoint)
        resolve(data)
      }
    }
    f(0)
  })

const dateToKey = (date) => {
  const year = String(date.getFullYear()).padStart(4, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDay() + 1).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const byDay = R.groupBy((item) => {
  const { timestamp } = item
  const date = new Date(Number(timestamp) * 1000)
  return dateToKey(date)
})

const diff = (a, b) => a - b

const pickLasts = (items) =>
  R.keys(items).map((key) => {
    const dayItems = R.sort(diff, items[key])
    return {
      key,
      amount: R.last(dayItems).amount,
    }
  })

// Run the graphing
;(async () => {
  const promises = [
    'https://api.thegraph.com/subgraphs/name/dev-protocol/mainnet-v2',
    'https://api.thegraph.com/subgraphs/name/dev-protocol/arbitrum-one-v2',
    'https://api.thegraph.com/subgraphs/name/dev-protocol/polygon-v2',
  ].map(fetchAll)
  const [mainnet, arb, polygon] = await Promise.allSettled(promises)

  const picked = [
    pickLasts(byDay(mainnet.value)),
    pickLasts(byDay(arb.value)),
    pickLasts(byDay(polygon.value)),
  ]
  const labels = R.sort(
    diff,
    picked.flat().map(({ key }) => new Date(key))
  ).map(dateToKey)

  const [m, a, p] = picked.map((chain) => {
    let lastValue = 0
    return labels.map((key) =>
      ((data) => {
        if (data) {
          lastValue = data.amount
        }
        return data ? data.amount : lastValue
      })(chain.find(({ key: K }) => key === K))
    )
  })
  const graphData = []
  for (let i = 0; i < labels.length; i++) {
    graphData.push({
      date: labels[i],
      mainnet: m[i],
      arb: a[i],
      polygon: p[i],
    })
  }
  graphData.sort((a, b) => {
    if (a.date > b.date) return 1
    if (a.date < b.date) return -1
    return 0
  })
  fs.writeFileSync(
    './public/data/dev_chart.json',
    JSON.stringify(graphData, null, '  ') + '\n'
  )
})()
