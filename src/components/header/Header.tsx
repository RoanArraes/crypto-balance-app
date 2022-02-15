import {
  HeaderArea,
  Label
} from './styles';

type Props = {
  label: string;
}

export function Header({label}: Props) {
  return(
    <HeaderArea>
      <Label>
        {label}
      </Label>
    </HeaderArea>
  )
}

export default Header;