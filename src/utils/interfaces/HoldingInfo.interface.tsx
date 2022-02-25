type PurchasesTransactions = {
  value: string,
  date: string
}

type SalesTransactions = {
  value: string,
  date: string
}

export interface TransactionsPortfolioInterface {
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