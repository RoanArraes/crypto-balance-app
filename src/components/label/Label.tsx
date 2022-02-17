import {
  Text
} from './styles'

type Props = {
  label: string
}

export default function Label({label}: Props) {
  return(
    <Text>{label}</Text>
  )
}