import {
  Container,
  Icon
} from "./styles"

type Props = {
  children: React.ReactNode
  top?: string
  right?: string
  maxWidth?: string
  visible: boolean
}

export default function DropDownRounded({
  children,
  top,
  right,
  maxWidth,
  visible
}: Props) {
  return(
    <Container
      top={top}
      right={right}
      maxWidth={maxWidth}
      visible={visible}
    >
      {visible ? <Icon>▴</Icon> : <Icon>▾</Icon>}
      {visible && children}
    </Container>
  )
}