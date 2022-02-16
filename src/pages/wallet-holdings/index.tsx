import {
  Container,
  HeaderArea,
  BodyArea,
  FooterArea,
  Label
} from './styles';

import { 
  Header,
  Footer,
  NavBar
 } from '../../components';

 import { LinksNavBarInterface } from '../../utils/interfaces';
import { ROUTES } from '../../utils/constants/routes';
import { LABELS } from '../../utils/constants/labels';

 type Props = {

 };

const links: LinksNavBarInterface[] = [
  {...ROUTES.HOME},
  {...ROUTES.BALANCE},
];

export default function WalletHoldings(props: Props) {
  return(
    <Container>
      <HeaderArea>
        <Header label={LABELS.TITLE_PROJECT} />
        <NavBar links={links} />
      </HeaderArea>
      <BodyArea>
        <Label>Creating Wallet holdings!</Label>
      </BodyArea>
      <FooterArea>
        <Footer label={LABELS.POWERED_BY} />
      </FooterArea>
    </Container>
  )
};