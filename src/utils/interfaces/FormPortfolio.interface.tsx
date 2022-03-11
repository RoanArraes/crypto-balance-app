export interface CreatePortfolioInterface {
  idUser?: string;
  name: string;
};

export interface RegisterTransactionBuyAndSellInterface {
  date: string;
  time: string;
  quantity: string;
  price?: string;
  totalValue?: string;
  fees?: string;
  notes?: string;
}

export interface RegisterTransactionInOutInterface {
  date: string;
  time: string;
  quantity: string;
  fees?: string;
  notes?: string;
}

export interface RegisterTransactionInterface 
  extends RegisterTransactionBuyAndSellInterface, RegisterTransactionInOutInterface {
  idUser?: string;
  idCoin?: string;
  type?: string;
}