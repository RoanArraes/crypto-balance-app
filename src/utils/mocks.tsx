import {HoldingInfoInterface} from '../utils/interfaces'

const MockListCoins: {
  name: string,
  id: string
}[] = [
  {
    id: "12",
    name: "bnb"
  },
  {
    id: "13",
    name: "eth"
  },
  {
    id: "14",
    name: "gala"
  },
  {
    id: "15",
    name: "axs"
  },
  {
    id: "16",
    name: "brise"
  }
]

const MockWalletHoldings: HoldingInfoInterface[] = [
  {
    id: "1",
    name: 'binance',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance',
    transactions: []
  },
  {
    id: "2",
    name: 'gateio',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance',
    transactions: [
      {
        name: "BNB",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "ETH",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "GALA",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "ADA",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "AXS",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      }
    ]
  },
  {
    id: "3",
    name: 'hotbit',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance',
    transactions: [
      {
        name: "BNB",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      }
    ]
  },
  {
    id: "4",
    name: 'hxwz',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance',
    transactions: [
      {
        name: "BNB",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      }
    ]
  },
  {
    id: "5",
    name: 'hxwz23',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance',
    transactions: [
      {
        name: "BNB",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "ETH",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "GALA",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "ADA",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "AXS",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "BNB",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "ETH",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "GALA",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "ADA",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        name: "AXS",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            value: "100",
            date: "2022-02-10"
          },
          {
            value: "130",
            date: "2022-01-10"
          }
        ],
        sales:[
          {
            value: "10",
            date: "2022-02-10"
          },
          {
            value: "30",
            date: "2022-01-10"
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      }
    ]
  },
]

export { MockWalletHoldings, MockListCoins };