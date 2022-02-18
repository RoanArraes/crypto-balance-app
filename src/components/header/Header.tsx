import { 
  LinksNavBarInterface
} from '../../utils/interfaces';

import {
  HeaderArea,
  LabelHeader
} from './styles';

import {
  NavBar
} from '../'

type Props = {
  label: string;
  links?: LinksNavBarInterface[]
}

export function Header({label, links}: Props) {
  return(
    <HeaderArea>
      <LabelHeader>
        {label}
      </LabelHeader>
      <NavBar links={links} />
    </HeaderArea>
  )
}

export default Header;