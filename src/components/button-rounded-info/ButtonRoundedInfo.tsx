import {
  ButtonArea,
  Button,
  Label
} from './styles'

import { CapitalizeFirstLetter } from '../../utils/functions';

type Props = {
  label: string
}

export default function ButtonRoundedInfo({label}: Props) {
  return(
    <ButtonArea>
      <Button>
          <Label>{CapitalizeFirstLetter(label)}</Label>
        </Button>
    </ButtonArea>
  )
}