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
  TableCoins,
  TableTransactions,
  ModalBase,
  ModalAddTransaction,
 } from '../../components';

import { 
  LinksNavBarInterface,
  HoldingInfoInterface,
  CreatePortfolioInterface,
  TransactionsPortfolioInterface
} from '../../utils/interfaces';

import {
  MockWalletHoldings
} from '../../utils/mocks';

import {
  ModalCreatePortfolio
} from './components/Modals';

import { ROUTES } from '../../utils/constants/routes';
import { LABELS, LABEL_BUTTONS } from '../../utils/constants/labels';
import { useEffect, useState } from 'react';

 type Props = {

 };

const links: LinksNavBarInterface[] = [
  {...ROUTES.HOME},
  {...ROUTES.BALANCE},
];

const portfolio = MockWalletHoldings;

const WalletPortfolios: React.FC = (props: Props) => {

  const [selectedPortfolio, setSelectedPortfolio] = useState<HoldingInfoInterface | undefined | false >(false);
  const [selectedTransaction, setSelectedTransaction] = useState<string | false>(false);
  const [isActiveModal, setIsActiveModal] = useState<null | boolean>(null);
  const [isActiveModalCreateCoin, setIsActiveModalCreateCoin] = useState<null | boolean>(null);
  const [form, setForm] = useState<CreatePortfolioInterface>({name: ""});

  useEffect(() => {
    if(selectedPortfolio) {
      setSelectedTransaction(false);
    }
  }, [selectedPortfolio]);

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
        {selectedPortfolio && !selectedTransaction ?
          <>
            <GroupBoxArea.GroupTableHoldings>
              <TablePortfolio portfolio={[selectedPortfolio]}/>
            </GroupBoxArea.GroupTableHoldings>

            {selectedPortfolio && selectedPortfolio.transactions.length ?
              <GroupBoxArea.GroupTableHoldings>
                <TableCoins
                  transactions={selectedPortfolio.transactions}
                  onClickTransaction={(id) => setSelectedTransaction(id)}
                />
              </GroupBoxArea.GroupTableHoldings>
              :
              <Wrapper
                flexDirection='column'
              >
                <GroupBoxArea.InfoMessage>
                  Nothing to show, first register one coin.
                </GroupBoxArea.InfoMessage>
                <ButtonRounded
                  type='button'
                  label='Register coin'
                  maxWidth='400px'
                  onClick={() => setIsActiveModalCreateCoin(true)}
                />
              </Wrapper>
            }
          </>
          : (selectedTransaction && selectedPortfolio) ?
            <GroupBoxArea.GroupTableHoldings>
              <Wrapper
                maxWidth='calc(100% - 20px)'
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                margin='0px 10px 20px 10px'
              >
                <ButtonRounded 
                  type='button'
                  label='back'
                  maxWidth='100px'
                  colorButton='buttonBack'
                  onClick={() => setSelectedTransaction(false)}
                />
                <ButtonRounded 
                  type='button'
                  label='add transaction'
                  maxWidth='200px'
                />
              </Wrapper>
              <TableTransactions
                transaction={findTransaction(selectedTransaction)}
              />
            </GroupBoxArea.GroupTableHoldings>
          : (!selectedPortfolio && !selectedTransaction) &&
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

  function findTransaction(id: string): TransactionsPortfolioInterface | null {
    let item = null;
    
    selectedPortfolio && selectedPortfolio['transactions'].map(t => {
      if(t.id === id) {
        item = t;
      }
      return null
    });
    return item;
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
        labelTitle="Create Portfolio"
        showModal={isActiveModal}
        onCloseModal={() => setIsActiveModal(false)}
        children={
          <ModalCreatePortfolio
            submitModalCreate={(e) => setForm({name: e.currentTarget.value})}
            nameLength={form.name.length}
          />
        }
      />
      <ModalBase 
        labelTitle='Register Coin'
        showModal={isActiveModalCreateCoin}
        onCloseModal={() => setIsActiveModalCreateCoin(false)}
        children={
          // <ModalCreateCoin
          //   submitModalCreate={(e) => setForm({name: e.currentTarget.value})}
          //   nameLength={form.name.length}
          // />
          <ModalAddTransaction />
        }
      />
    </Container>
  )
};

export default WalletPortfolios;