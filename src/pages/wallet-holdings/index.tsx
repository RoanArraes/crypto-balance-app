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
  Label,
  ButtonRounded,
  ButtonRoundedInfo,
  TableHoldings
 } from '../../components';

import { 
  LinksNavBarInterface,
  HoldingInfoInterface
} from '../../utils/interfaces';

import { ROUTES } from '../../utils/constants/routes';
import { LABELS } from '../../utils/constants/labels';

 type Props = {

 };

const links: LinksNavBarInterface[] = [
  {...ROUTES.HOME},
  {...ROUTES.BALANCE},
];

const holdings: HoldingInfoInterface[] = [
  {
    name: 'binance',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance'
  },
  {
    name: 'gateio',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance'
  },
  {
    name: 'hotbit',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23',
    totalHolding: 150.00,
    profit24hrs: 0.00,
    loss24hrs: 100.00,
    idealHold: 100.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaaaaa5325325321aaaaaaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaaaaaa32352aaaaaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaaaaaa35532532aaaaaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaaa532532aaaaaaaaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaaaa43432aaaaaaaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaaaaaa9786786aaaaaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaaaaaa000aaaaaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaaaaaaa7998aaaaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaaaaaa8676aaaaaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaa5465aaaaaaaaaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaaa44aaaaaaaaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  },
  {
    name: 'hxwz23aaaaaaaaaaaaa213aaaaaaaaaaaaaaaaaa',
    totalHolding: 150000000000.00,
    profit24hrs: 100000000000.0000000,
    loss24hrs: 1000000.00,
    idealHold: 100000000000000.00,
    action: 'Rebalance'
  }
];

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
        <Header label={LABELS.TITLE_PROJECT} />
        <NavBar links={links} />
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