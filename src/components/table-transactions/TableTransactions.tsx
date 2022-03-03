import { TransactionsPortfolioInterface } from '../../utils/interfaces';
import {
  TableArea,
  TablesWrapper,
  Label,
  InfoMessage
} from './styles';

import { CapitalizeFirstLetter } from '../../utils/functions';
import { LABELS } from '../../utils/constants/labels';

type Props = {
  transaction: TransactionsPortfolioInterface | null;
}

export default function TableTransactions({
  transaction
}: Props) {


  if (!transaction) {
    return null
  }

  return(
    <TablesWrapper>
      <Label
        textUppercase
      >
        {LABELS.TRANSACTIONS_TABLE_TITLE + ` - ${transaction.name}`}
      </Label>
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
          {
            <tr key={`${transaction.id}-table-transactions`}>
              <td>{CapitalizeFirstLetter(transaction.name)}</td>
              <td>+ ${transaction.profit24hrs}</td>
              <td>${transaction.avgBuyPrice}</td>
              <td>${transaction.totalValue}</td>
              <td>${transaction.idealHold}</td>
              <td>{transaction.action}</td>
              <td>:</td>
            </tr>
          }
        </tbody>
      </TableArea>
        <Label
          textUppercase
        >
          {LABELS.PURCHASES_TRANSACTIONS_TABLE}
        </Label>
        {transaction.purchases && transaction.purchases.length ?
          <TableArea>
            <thead>
              <tr>
                <th>Type</th>
                <th>Date</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Fees</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transaction.purchases.map(p => {
                return(
                  <tr key={`${p.id}-table-purchases`}>
                    <td>Buy</td>
                    <td>{p.date}</td>
                    <td>${p.price}</td>
                    <td>{p.amount}</td>
                    <td>${p.fee}</td>
                    <td>:</td>
                  </tr>
                )
              })}
            </tbody>
          </TableArea>
        : 
          <InfoMessage>
            Nothing to show, register one purchase.
          </InfoMessage>
        }
        <Label
          textUppercase
        >
          {LABELS.SALES_TRANSACTIONS_TABLE}
        </Label>
        {transaction.sales && transaction.sales.length ?
          <TableArea>
            <thead>
              <tr>
                <th>Type</th>
                <th>Date</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Fees</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transaction.sales.map(s => {
                return(
                  <tr key={`${s.id}-table-sales`}>
                    <td>Sell</td>
                    <td>{s.date}</td>
                    <td>${s.price}</td>
                    <td>{s.amount}</td>
                    <td>${s.fee}</td>
                    <td>:</td>
                  </tr>
                )
              })}
            </tbody>
          </TableArea>
        :
          <InfoMessage>
            Nothing to show, register one sale.
          </InfoMessage>
        }
    </TablesWrapper>
  )
};