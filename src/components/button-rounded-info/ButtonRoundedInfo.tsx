import {
  ButtonArea,
  Button,
  Label
} from './styles'

type Props = {
  label: string
}

export default function ButtonRoundedInfo({label}: Props) {
  return(
    <ButtonArea>
      <Button>
          <Label>{label}</Label>
        </Button>
    </ButtonArea>
  )
}