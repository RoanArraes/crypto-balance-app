import { TransactionsPortfolioInterface } from '../../utils/interfaces';
import {
  TableArea,
  TableWrapper,
  Label,
} from './styles';

import { CapitalizeFirstLetter } from '../../utils/functions';
import { LABELS } from '../../utils/constants/labels';

type Props = {
  transactions: TransactionsPortfolioInterface[];
  onClickTransaction: (id: string) => void 
}

export default function TableCoins({
  transactions,
  onClickTransaction
}: Props) {

  if (!transactions) {
    return null
  }

  return(
    <TableWrapper>
      <Label
        textUppercase
      >
        {LABELS.COINS_TABLE_TITLE}
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
          </tr>
        </thead>
        <tbody>
          {transactions.map(t => {
            return(
                <tr key={`${t.id}-table-transactions`}>
                  <td onClick={() => onClickTransaction(t.id)} >{CapitalizeFirstLetter(t.name)}</td>
                  <td onClick={() => onClickTransaction(t.id)}>+ ${t.profit24hrs}</td>
                  <td onClick={() => onClickTransaction(t.id)}>${t.avgBuyPrice}</td>
                  <td onClick={() => onClickTransaction(t.id)}>${t.totalValue}</td>
                  <td onClick={() => onClickTransaction(t.id)}>${t.idealHold}</td>
                  <td onClick={() => onClickTransaction(t.id)}>{t.action}</td>
                </tr>
            )
          })}
        </tbody>
      </TableArea>
    </TableWrapper>
  )
};