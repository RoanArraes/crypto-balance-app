import {
  HeaderArea,
  LabelHeader
} from './styles';

type Props = {
  label: string;
}

export function Header({label}: Props) {
  return(
    <HeaderArea>
      <LabelHeader>
        {label}
      </LabelHeader>
    </HeaderArea>
  )
}

export default Header;