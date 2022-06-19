const BigNumber = require('bignumber.js')
const fs = require('fs')

// Define `fetchAll` function to fetch all data from TheGraph
const fetchAll = async (endpoint) => new Promise(async (resolve) => {
    let data = []
    const f = async (timestamp = 0) => {
        const res = await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify({
                query:
                    `{
                    totalLockedAmounts(first: 1000, orderBy: timestamp, orderDirection: asc, where:{timestamp_gt: ${timestamp}}) {
                        id
                        timestamp
                        amount
                    }
                }`
            })
        })
        const json = await res.json()
        if (json.data.totalLockedAmounts.length) {
            console.log('respond', json.data.totalLockedAmounts.length)
            const items = json.data.totalLockedAmounts.map(({
                timestamp,
                amount,
                id
            }) => ({
                id,
                timestamp,
                amount: new BigNumber(amount).div(1e18).toNumber()
            }))
            data = [...data, ...items]
            f(items[items.length - 1].timestamp)
        } else {
            console.log('finish', endpoint)
            if (endpoint === 'https://api.thegraph.com/subgraphs/name/dev-protocol/polygon-v2') {
                fs.writeFileSync("./src/data/polygon.json", JSON.stringify(data, null, ' '))
            } else if (endpoint === 'https://api.thegraph.com/subgraphs/name/dev-protocol/arbitrum-one-v2') {
                fs.writeFileSync("./src/data/arbitrum.json", JSON.stringify(data, null, ' '))
            } else if (endpoint === 'https://api.thegraph.com/subgraphs/name/dev-protocol/mainnet-v2') {
                fs.writeFileSync("./src/data/mainnet.json", JSON.stringify(data, null, ' '))
            }
            resolve(data)
        }
    }
    f(0)
})

    // Run the graphing
    ;
(async () => {
    const promises = [
        'https://api.thegraph.com/subgraphs/name/dev-protocol/mainnet-v2',
        'https://api.thegraph.com/subgraphs/name/dev-protocol/arbitrum-one-v2',
        'https://api.thegraph.com/subgraphs/name/dev-protocol/polygon-v2'
    ].map(fetchAll)
    const [mainnet, arb, polygon] = await Promise.allSettled(promises)

})()
