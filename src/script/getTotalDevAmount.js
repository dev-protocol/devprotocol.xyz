const BigNumber = require('bignumber.js')
const fs = require('fs')

const chains = [
  {
    name: 'mainnet',
    endpoint: 'https://api.thegraph.com/subgraphs/name/dev-protocol/mainnet-v2',
  },
  {
    name: 'arbitrum',
    endpoint:
      'https://api.thegraph.com/subgraphs/name/dev-protocol/arbitrum-one-v2',
  },
  {
    name: 'polygon',
    endpoint: 'https://api.thegraph.com/subgraphs/name/dev-protocol/polygon-v2',
  },
]

const fetchAll = async (chains) =>
  new Promise((resolve) => {
    let data = []
    const f = async (timestamp = 0) => {
      const res = await fetch(chains.endpoint, {
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
            chain: chains.name,
            id,
            timestamp,
            amount: new BigNumber(amount).div(1e18).toNumber(),
          })
        )
        data = [...data, ...items]
        f(items[items.length - 1].timestamp)
      } else {
        console.log('finish', chains.name)
        resolve(data)
      }
    }
    f(0)
  })

// Run the graphing
;(async () => {
  const promises = chains.map(fetchAll)
  const [mainnet, arb, polygon] = await Promise.allSettled(promises)
  fs.writeFileSync(
    './src/script/data/data.json',
    JSON.stringify(mainnet.value.concat(arb.value, polygon.value), null, '  ')
  )
})()
