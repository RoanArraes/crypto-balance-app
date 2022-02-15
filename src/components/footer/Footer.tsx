import {
  FooterArea,
  Label
} from './styles';

type Props = {
  label: string;
}

export function Footer({label}: Props) {
  return(
    <FooterArea>
      <Label>
        {label}
      </Label>
    </FooterArea>
  )
}

export default Footer;