import { HoldingInfoInterface } from '../../utils/interfaces';
import {
  TableArea,
  TableWrapper,
  Label,
} from './styles';

import { CapitalizeFirstLetter } from '../../utils/functions';
import { LABELS } from '../../utils/constants/labels';

type Props = {
  portfolio: HoldingInfoInterface[] 
}

export default function TablePortfolio({ portfolio }: Props) {

  if (!portfolio) {
    return null
  }

  return(
    <TableWrapper>
      <Label
        textUppercase
      >
        {LABELS.PORTFOLIO_TABLE_TITLE + ` - ${portfolio[0].name}`}
      </Label>
      <TableArea>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Profit/Loss</th>
            <th>Ideal value</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map(h => {
            return(
                <tr key={`${h.name}-table-portfolio`}>
                  <td>{CapitalizeFirstLetter(h.name)}</td>
                  <td>${h.totalHolding}</td>
                  <td>+ ${h.profit24hrs}</td>
                  <td>${h.idealHold}</td>
                  <td>{h.action}</td>
                  <td>:</td>
                </tr>
            )
          })}
        </tbody>
      </TableArea>
    </TableWrapper>
  )
}