import { TransactionsPortfolioInterface } from '../../utils/interfaces';
import {
  TableArea
} from './styles';

import { CapitalizeFirstLetter } from '../../utils/functions';

type Props = {
  transactions: TransactionsPortfolioInterface[] 
}

const renderTable = (transactions: TransactionsPortfolioInterface[]) => {

  if (!transactions) {
    return null
  }

  return(
    <TableArea>
      <thead>
        <tr>
          <th>Name</th>
          <th>Profit/Loss</th>
          <th>Avg Buy Price</th>
          <th>Value</th>
          <th>Ideal Value</th>
          <th>Action</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(t => {
          return(
              <tr key={`${t.name}-table-transactions`}>
                <td>{CapitalizeFirstLetter(t.name)}</td>
                <td>+ ${t.profit24hrs}</td>
                <td>${t.avgBuyPrice}</td>
                <td>${t.totalValue}</td>
                <td>${t.idealHold}</td>
                <td>{t.action}</td>
                <td>:</td>
              </tr>
          )
        })}
      </tbody>
    </TableArea>
  )
}

export default function TableTransactions({transactions}: Props) {
  return(
    <>
      {renderTable(transactions)}
    </>
  );
}