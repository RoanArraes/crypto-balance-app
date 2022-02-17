import {
  Container,
  HeaderArea,
  BodyArea,
  FooterArea,
  GroupBoxArea
} from './styles';

import { 
  Header,
  Footer,
  NavBar,
  BoxArea,
  Label
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

const AreaLeft = () => {
  return(
    <GroupBoxArea.Left>
      <Label label='Your Holdings' />
      <Label label='$' />
    </GroupBoxArea.Left>
  )
};

const AreaRight = () => {
  return(
    <GroupBoxArea.Right>
      <Label label='Holdings' />
    </GroupBoxArea.Right>
  )
}

export default function WalletHoldings(props: Props) {
  return(
    <Container>
      <HeaderArea>
        <Header label={LABELS.TITLE_PROJECT} />
        <NavBar links={links} />
      </HeaderArea>
      <BodyArea>
        <BoxArea 
          childrenLeft={AreaLeft()}
          childrenRight={AreaRight()}
        />
      </BodyArea>
      <FooterArea>
        <Footer label={LABELS.POWERED_BY} />
      </FooterArea>
    </Container>
  )
};