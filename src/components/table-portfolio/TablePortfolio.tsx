import { HoldingInfoInterface } from '../../utils/interfaces';
import {
  TableArea,
  TableWrapper,
  Label,
  WrapperItens
} from './styles';

import { CapitalizeFirstLetter } from '../../utils/functions';
import { LABELS } from '../../utils/constants/labels';
import {
  DropDownRounded
} from "../";
import { useState } from 'react';

type Props = {
  portfolio: HoldingInfoInterface[] 
}

export default function TablePortfolio({ portfolio }: Props) {

  const [isActiveDropDown, setIsActiveDropDown] = useState<Boolean>(false);

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
      <TableArea
       id='table-portfolio__binance'
      >
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
                  <td 
                    id={`td-portfolio__open-dropdown-${h.name}`} 
                    onClick={() => setIsActiveDropDown(!isActiveDropDown)}
                  >
                    <DropDownRounded
                      visible={isActiveDropDown ? true : false}
                      top='245px'
                      children={
                        <WrapperItens
                          display='flex'
                          flexDirection="column"
                          alignItems='center'
                          justifyContent='center'
                          flexWrap="wrap"
                        >
                          <span>Edit</span>
                          <span>Remove</span>
                        </WrapperItens>
                      }
                    />
                  </td>
                </tr>
            )
          })}
        </tbody>
      </TableArea>
    </TableWrapper>
  )
}