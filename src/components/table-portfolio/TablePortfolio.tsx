import { HoldingInfoInterface } from '../../utils/interfaces';
import {
  TableArea
} from './styles';

import { CapitalizeFirstLetter } from '../../utils/functions';

type Props = {
  portfolio: HoldingInfoInterface[] 
}

const renderTable = (portfolio: HoldingInfoInterface[]) => {

  if (!portfolio || !portfolio.length) {
    return null
  }

  return(
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
  )
}

export default function TablePortfolio({portfolio}: Props) {
  return(
    <>
      {renderTable(portfolio)}
    </>
  );
}