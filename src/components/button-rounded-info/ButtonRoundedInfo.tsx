import {
  ButtonArea,
  Button,
  Label
} from './styles'

import { CapitalizeFirstLetter } from '../../utils/functions';

type Props = {
  id: string,
  label: string,
  isSelected: boolean,
  onClick: React.MouseEventHandler,
}

export default function ButtonRoundedInfo({id, label, isSelected, onClick}: Props) {
  return(
    <ButtonArea>
      <Button 
        id={id} 
        onClick={onClick} 
        isSelected={isSelected} 
      >
          <Label>{CapitalizeFirstLetter(label)}</Label>
        </Button>
    </ButtonArea>
  )
}