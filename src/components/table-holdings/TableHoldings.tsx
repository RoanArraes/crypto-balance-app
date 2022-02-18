import { HoldingInfoInterface } from '../../utils/interfaces';
import {
  TableArea
} from './styles';

type Props = {
  holdings: HoldingInfoInterface[] 
}

const renderTable = (holdings: HoldingInfoInterface[]) => {

  if (!holdings || !holdings.length) {
    return null
  }

  return(
    <TableArea>
      <tr>
        <th>Name</th>
        <th>Holdings</th>
        <th>Profit/Loss</th>
        <th>Ideal hold</th>
        <th>Action</th>
      </tr>
        {holdings.map(h => {
          return(
            <tr key={`${h.name}-table-holding`}>
              <td>{h.name}</td>
              <td>{h.totalHolding}</td>
              <td>{h.profit24hrs}</td>
              <td>{h.idealHold}</td>
              <td>{h.action}</td>
            </tr>
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