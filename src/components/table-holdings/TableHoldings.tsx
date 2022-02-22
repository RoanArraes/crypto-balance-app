import { HoldingInfoInterface } from '../../utils/interfaces';
import {
  TableArea
} from './styles';

import { CapitalizeFirstLetter } from '../../utils/functions';

type Props = {
  holdings: HoldingInfoInterface[] 
}

const renderTable = (holdings: HoldingInfoInterface[]) => {

  if (!holdings || !holdings.length) {
    return null
  }

  return(
    <TableArea>
      <thead>
        <tr>
          <th>Name</th>
          <th>Holdings</th>
          <th>Profit/Loss</th>
          <th>Ideal hold</th>
          <th>Action</th>
          <th></th>
        </tr>
      </thead>
        {holdings.map(h => {
          return(
            <tbody key={`${h.name}-table-holding`}>
              <tr>
                <td>{CapitalizeFirstLetter(h.name)}</td>
                <td>${h.totalHolding}</td>
                <td>+ ${h.profit24hrs}</td>
                <td>${h.idealHold}</td>
                <td>{h.action}</td>
                <td>:</td>
              </tr>
            </tbody>
          )
        })}
    </TableArea>
  )
}

export default function TableHoldings({holdings}: Props) {
  return(
    <>
      {renderTable(holdings)}
    </>
  );
}