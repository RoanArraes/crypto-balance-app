type PurchasesTransactions = {
  id: string,
  value: string,
  date: string
  amount: string,
  price: string,
  fee: string
}

type SalesTransactions = {
  id: string,
  value: string,
  date: string
  amount: string,
  price: string,
  fee: string
}

export interface TransactionsPortfolioInterface {
  id: string,
  name: string,
  purchases: PurchasesTransactions[],
  sales: SalesTransactions[],
  avgBuyPrice: string,
  totalValue: string,
  idealHold: string,
  profit24hrs: string,
  action: string
}


export interface HoldingInfoInterface {
  id: string,
  name: string,
  totalHolding: number,
  profit24hrs: number,
  loss24hrs: number,
  idealHold: number,
  action: string
  transactions: TransactionsPortfolioInterface[]
};