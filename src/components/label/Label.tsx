import {
  Text,
  TeaxtArea
} from './styles'

type Props = {
  label?: string
}

export default function Label({label}: Props) {
  return(
    <TeaxtArea>
      <Text>{label}</Text>
    </TeaxtArea>

  )
}