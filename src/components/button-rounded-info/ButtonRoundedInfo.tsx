import {
  ButtonArea,
  Button,
  Label
} from './styles'

import { CapitalizeFirstLetter } from '../../utils/functions';

type Props = {
  id: string,
  label: string,
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

export default function ButtonRoundedInfo({id, label, onClick}: Props) {
  return(
    <ButtonArea>
      <Button id={id} onClick={onClick}>
          <Label>{CapitalizeFirstLetter(label)}</Label>
        </Button>
    </ButtonArea>
  )
}