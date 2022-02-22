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
  TablePortfolio
 } from '../../components';

import { 
  LinksNavBarInterface,
  HoldingInfoInterface
} from '../../utils/interfaces';

import {
  MockWalletHoldings
} from '../../utils/mocks';

import { ROUTES } from '../../utils/constants/routes';
import { LABELS, LABEL_BUTTONS } from '../../utils/constants/labels';
import { useState } from 'react';

 type Props = {

 };

const links: LinksNavBarInterface[] = [
  {...ROUTES.HOME},
  {...ROUTES.BALANCE},
];

const portfolio = MockWalletHoldings;



export default function WalletPortfolios(props: Props) {

  const [selectedPortfolio, setSelectedPortfolio] = useState({ id: ''});

  const renderButtonPortfolio = (portfolio: HoldingInfoInterface[]) => {
    if(!portfolio || !portfolio.length) {
      return null
    }
  
    return(
      portfolio.map( h => {
        return (
          <ButtonRoundedInfo 
            key={h.name}
            id={h.id}
            label={h.name} 
            onClick={(e) => console.log("clicou", e.currentTarget.id)}
          />
        );
      })
    );
  }
  
  const AreaLeft = () => {
    return(
      <GroupBoxArea.Left>
        <GroupBoxArea.GroupLabels>
          <Label label={LABELS.PORTFOLIO_USER} />
          <Label label='$ 100,00' />
        </GroupBoxArea.GroupLabels>
        <GroupBoxArea.GroupButtonInfoHolding>
          {renderButtonPortfolio(portfolio)}
        </GroupBoxArea.GroupButtonInfoHolding>
        <GroupBoxArea.GroupButtonAdd>
          <ButtonRounded label={LABEL_BUTTONS.CREATE_PORTFOLIO} type="button" />
        </GroupBoxArea.GroupButtonAdd>
      </GroupBoxArea.Left>
    )
  };
  
  const AreaRight = () => {
    return(
      <GroupBoxArea.Right>
        <GroupBoxArea.GroupLabels>
          <Label label={LABELS.PORTFOLIO_TABLE_TITLE} />
        </GroupBoxArea.GroupLabels>
        <GroupBoxArea.GroupTableHoldings>
          <TablePortfolio portfolio={portfolio}/>
        </GroupBoxArea.GroupTableHoldings>
      </GroupBoxArea.Right>
    )
  }

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