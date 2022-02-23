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
  TablePortfolio,
  TableTransactions
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

  const [selectedPortfolio, setSelectedPortfolio] = useState<HoldingInfoInterface | undefined | false >(false);


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
            onClick={(e) => findSelectedPortfolio(e.currentTarget.id)}
            isSelected={selectedPortfolio ? selectedPortfolio.id === h.id : false}
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
          <Label label={LABELS.PORTFOLIO_TABLE_TITLE + ` - ${selectedPortfolio ? selectedPortfolio.name : ""}`} />
        </GroupBoxArea.GroupLabels>

          {selectedPortfolio ?
            <GroupBoxArea.GroupTableHoldings>
              <TablePortfolio portfolio={[selectedPortfolio]}/>
            </GroupBoxArea.GroupTableHoldings>
            :
            <GroupBoxArea.InfoMessage>
              Any Portfolio.
            </GroupBoxArea.InfoMessage>
          }

        <GroupBoxArea.GroupLabels>
          <Label label={LABELS.TRANSACTIONS_TABLE_TITLE} />
        </GroupBoxArea.GroupLabels>
        {selectedPortfolio && selectedPortfolio.transactions.length ?
          <GroupBoxArea.GroupTableHoldings>
            <TableTransactions transactions={selectedPortfolio.transactions}/>
          </GroupBoxArea.GroupTableHoldings>
          :
          <GroupBoxArea.InfoMessage>
            Any Transaction.
          </GroupBoxArea.InfoMessage>
        }
      </GroupBoxArea.Right>
    )
  }

  const findSelectedPortfolio = (id: string) => {
    if (!id || id === "") {
      return null
    }

    const item = portfolio.find(p => p.id === id);

    setSelectedPortfolio(item);
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