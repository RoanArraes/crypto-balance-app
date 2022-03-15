import {SelectedPortfolioAndCoinInterface, HoldingInfoInterface} from '../utils/interfaces'

const MockListCoins: SelectedPortfolioAndCoinInterface[] = [
  {
    idCoin: "12",
    nameCoin: "BNB",
    projectInitials: "BNB"
  },
  {
    idCoin: "13",
    nameCoin: "Ethereum",
    projectInitials: "ETH"
  },
  {
    idCoin: "14",
    nameCoin: "Gala",
    projectInitials: "GALA"
  },
  {
    idCoin: "15",
    nameCoin: "Axie Infinity",
    projectInitials: "AXS"
  },
  {
    idCoin: "16",
    nameCoin: "Bitgert",
    projectInitials: "BRISE"
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
        id: "1rd",
        name: "BNB",
        projectInitials: "BNB",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "231rfs",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "123fasf",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "fdasfga",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "fdsgsda23",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "2bdbv",
        name: "Ethereum",
        projectInitials: "ETH",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "312dfasdfa",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "123fsaf",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "352dsa",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "hfdfsd",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "3fdbdbf",
        name: "Gala",
        projectInitials: "GALA",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "123sda",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "124qsa",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "hgdjhjgf",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "loiulh",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "4bfddfg",
        name: "Cardano",
        projectInitials: "BNB",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "asdvdaz1",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "213fdsa",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "54yhgddg",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "ghfjfgj43",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "5rgwegg",
        name: "Axios Infinite",
        projectInitials: "AXS",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "15wrfa",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "t2tfsd",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "hfkfg",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "lophjmgbh",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      }
    ]
  },
  {
    id: "3fsgsfg",
    name: 'hotbit',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance',
    transactions: [
      {
        id: "1sssfgs",
        name: "BNB",
        projectInitials: "BNB",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "462deas",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "3rgfasd",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "opilhj",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "apilhj",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      }
    ]
  },
  {
    id: "4gdsgsg",
    name: 'hxwz',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance',
    transactions: [
      {
        id: "1casfdgs",
        name: "BNB",
        projectInitials: "BNB",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "fsafgaf",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "fshsfh12",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "jhgkg",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "asaewwqa",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
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
        id: "1cvhgd",
        name: "BNB",
        projectInitials: "BNB",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "asedqafda",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35"
          },
          {
            id: "ased21qafda",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35"
          }
        ],
        sales:[
          {
            id: "jhfjhkfg",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "opuljkljkl",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "2fajgfj",
        name: "Ethereum",
        projectInitials: "ETH",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "adssad",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35"
          },
          {
            id: "gadg",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "phjkgh",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "puljhk",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "3dfgdf",
        name: "Gala",
        projectInitials: "GALA",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "asdasdf",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35"
          },
          {
            id: "4654a",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "fdsgsg",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "43wts",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "4gfjfgj",
        name: "Cardano",
        projectInitials: "ADA",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "2314sda",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "fdfhs",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "56yhgtfdh",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "56yhd",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "5etyety",
        name: "Axios Infinite",
        projectInitials: "AXS",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "dsafaf",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "gfdhfdh",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "kjmlkhj",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "sdujgf",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "1etyjgdjgd",
        name: "BNB",
        projectInitials: "BNB",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "fasfsafa",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "sfdafgasf",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "iuyoityu",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "wqeerffaz",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "2jtjdhjgj",
        name: "Ethereum",
        projectInitials: "ETH",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "gfsdhsfh",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "ghfhjgf",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "weadf",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "daradsf",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "3tjjtgdj",
        name: "Gala",
        projectInitials: "GALA",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "hfdhdfh",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "hjgfjfg",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "ardsasd",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "2eawsrfdas",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "4ertret",
        name: "Cardano",
        projectInitials: "ADA",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "ghdhdg",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "jhfjfg",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "afdsfga",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "sadfasa",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      },
      {
        id: "5teyeyewr",
        name: "Axios Infinite",
        projectInitials: "AXS",
        idealHold: "100",
        profit24hrs: "10",
        action: "Rebalance",
        purchases: [
          {
            id: "56747fd",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "hjgjjg",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        sales:[
          {
            id: "fasfads",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          },
          {
            id: "vfdxgfs",
            value: "100",
            date: "2022-02-10",
            price: "0,01",
            amount: "100",
            fee: "1,35",
          }
        ],
        avgBuyPrice: "115",
        totalValue: "230"
      }
    ]
  },
]

export { MockWalletHoldings, MockListCoins };