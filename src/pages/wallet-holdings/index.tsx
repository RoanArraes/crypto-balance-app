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
  BoxArea,
  Label,
  ButtonRounded,
  ButtonRoundedInfo,
  TableHoldings
 } from '../../components';

import { 
  LinksNavBarInterface,
  HoldingInfoInterface
} from '../../utils/interfaces';

import {
  MockWalletHoldings
} from '../../utils/mocks';

import { ROUTES } from '../../utils/constants/routes';
import { LABELS } from '../../utils/constants/labels';

 type Props = {

 };

const links: LinksNavBarInterface[] = [
  {...ROUTES.HOME},
  {...ROUTES.BALANCE},
];

const holdings = MockWalletHoldings;

const renderButtonHolding = (holdings: HoldingInfoInterface[]) => {
  if(!holdings || !holdings.length) {
    return null
  }

  return(
    holdings.map( h => {
      return (
        <ButtonRoundedInfo label={h.name} key={h.name}/>
      );
    })
  );
}

const AreaLeft = () => {
  return(
    <GroupBoxArea.Left>
      <GroupBoxArea.GroupLabels>
        <Label label='Your Holdings' />
        <Label label='$ 100,00' />
      </GroupBoxArea.GroupLabels>
      <GroupBoxArea.GroupButtonInfoHolding>
        {renderButtonHolding(holdings)}
      </GroupBoxArea.GroupButtonInfoHolding>
      <GroupBoxArea.GroupButtonAdd>
        <ButtonRounded label="add transaction" type="button" />
      </GroupBoxArea.GroupButtonAdd>
    </GroupBoxArea.Left>
  )
};

const AreaRight = () => {
  return(
    <GroupBoxArea.Right>
      <GroupBoxArea.GroupLabels>
        <Label label='Holdings' />
      </GroupBoxArea.GroupLabels>
      <GroupBoxArea.GroupTableHoldings>
        <TableHoldings holdings={holdings}/>
      </GroupBoxArea.GroupTableHoldings>
    </GroupBoxArea.Right>
  )
}

export default function WalletHoldings(props: Props) {
  return(
    <Container>
      <HeaderArea>
        <Header
          label={LABELS.TITLE_PROJECT}
          links={links} 
        />
      </HeaderArea>
      <BodyArea>
        <GroupBoxArea.Container>
          <BoxArea 
            childrenLeft={AreaLeft()}
            childrenRight={AreaRight()}
          />
        </GroupBoxArea.Container>
      </BodyArea>
      <FooterArea>
        <Footer label={LABELS.POWERED_BY} />
      </FooterArea>
    </Container>
  )
};