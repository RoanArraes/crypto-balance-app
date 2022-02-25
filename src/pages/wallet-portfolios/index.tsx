import {
  Container,
  HeaderArea,
  BodyArea,
  FooterArea,
  GroupBoxArea,
  Wrapper,
  Label
} from './styles';

import { 
  Header,
  Footer,
  BoxArea,
  ButtonRounded,
  ButtonRoundedInfo,
  TablePortfolio,
  TableTransactions,
  ModalBase,
 } from '../../components';

import { 
  LinksNavBarInterface,
  HoldingInfoInterface,
  CreatePortfolioInterface
} from '../../utils/interfaces';

import {
  MockWalletHoldings
} from '../../utils/mocks';

import {
  ModalCreatePortfolio
} from './components/Modals';

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

const WalletPortfolios: React.FC = (props: Props) => {

  const [selectedPortfolio, setSelectedPortfolio] = useState<HoldingInfoInterface | undefined | false >(false);
  const [isActiveModal, setIsActiveModal] = useState<null | boolean>(null);
  const [form, setForm] = useState<CreatePortfolioInterface>({name: ""});

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
          <Label
            textUppercase
          >
            {LABELS.PORTFOLIO_USER}
          </Label>
          <Label
            textUppercase
          >
            $ 100,00
          </Label>
        <GroupBoxArea.GroupButtonInfoHolding>
          {renderButtonPortfolio(portfolio)}
        </GroupBoxArea.GroupButtonInfoHolding>
        <GroupBoxArea.GroupButtonAdd>
          <ButtonRounded 
            label={LABEL_BUTTONS.CREATE_PORTFOLIO} 
            type="button" 
            onClick={() => setIsActiveModal(true)}
          />
        </GroupBoxArea.GroupButtonAdd>
      </GroupBoxArea.Left>
    )
  };
  
  const AreaRight = () => {
    return(
      <GroupBoxArea.Right>
        <Label
          textUppercase
        >
          {LABELS.PORTFOLIO_TABLE_TITLE + `${selectedPortfolio ? ' - '+ selectedPortfolio.name : ""}`}
        </Label> 
          {selectedPortfolio ?
          <>
            <GroupBoxArea.GroupTableHoldings>
              <TablePortfolio portfolio={[selectedPortfolio]}/>
            </GroupBoxArea.GroupTableHoldings>
            <Label
              textUppercase
            >
              {LABELS.TRANSACTIONS_TABLE_TITLE}
            </Label>
            {selectedPortfolio && selectedPortfolio.transactions.length ?
              <GroupBoxArea.GroupTableHoldings>
                <TableTransactions transactions={selectedPortfolio.transactions}/>
              </GroupBoxArea.GroupTableHoldings>
              :
              <Wrapper
                flexDirection='column'
              >
                <GroupBoxArea.InfoMessage>
                  Nothing to show, register one transaction.
                </GroupBoxArea.InfoMessage>
                <ButtonRounded
                  type='button'
                  label='Register transaction'
                  maxWidth='400px'
                />
              </Wrapper>
            }
          </>
            :
            <GroupBoxArea.InfoMessage>
              Create or select your Portfolio.
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

  const onSubmitForm = () => {

  };

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
      <ModalBase 
        showModal={isActiveModal}
        onCloseModal={() => setIsActiveModal(false)}
        children={
          <ModalCreatePortfolio
            submitModalCreate={(e) => setForm({name: e.currentTarget.value})}
            nameLength={form.name.length}
          />
        }
      />
    </Container>
  )
};

export default WalletPortfolios;