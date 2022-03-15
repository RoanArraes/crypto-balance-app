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
  ModalAddTransaction,
  ModalCreatePortfolio,
  ModalRegisterCoin
 } from '../../components';

import { 
  LinksNavBarInterface,
  HoldingInfoInterface,
  TransactionsPortfolioInterface,
  SelectedPortfolioAndCoinInterface
} from '../../utils/interfaces';

import {
  MockWalletHoldings
} from '../../utils/mocks';

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

export default function WalletPortfolios(props: Props){

  const [selectedPortfolio, setSelectedPortfolio] = useState<HoldingInfoInterface | undefined | null >(null);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionsPortfolioInterface | null>(null);
  const [isActiveModalCreatePortfolio, setIsActiveModalCreatePortfolio] = useState<boolean>(false);
  const [isActiveModalCreateCoin, setIsActiveModalCreateCoin] = useState<boolean>(false);
  const [isActiveModalRegisterCoin, setIsActiveModalRegisterCoin] = useState<boolean>(false);
  

  useEffect(() => {
    if(selectedPortfolio) {
      setSelectedTransaction(null);
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
            onClick={() => setIsActiveModalCreatePortfolio(true)}
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
                  onClickTransaction={(id) => findTransaction(id)}
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
                  onClick={() => setIsActiveModalRegisterCoin(true)}
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
                  onClick={() => setSelectedTransaction(null)}
                />
                <ButtonRounded 
                  type='button'
                  label='add transaction'
                  maxWidth='200px'
                  onClick={() => setIsActiveModalCreateCoin(true)}
                />
              </Wrapper>
              <TableTransactions
                transaction={selectedTransaction}
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

  function findSelectedPortfolio(id: string): void {
    const item = portfolio.find(p => p.id === id);
    setSelectedPortfolio(item);
  }

  function findTransaction(id: string): void {
    let item = null;
    const portfolio = selectedPortfolio;

    portfolio && portfolio['transactions'].map(t => {
      if(t.id === id) {
        item = t;
      }
      return null
    });

    setSelectedTransaction(item);
  }

  function chargeTransactionPortfolio() {
    const result: SelectedPortfolioAndCoinInterface = {
      idPortfolio: selectedPortfolio ? selectedPortfolio.id : "",
      idCoin: selectedTransaction ? selectedTransaction.id : "",
      nameCoin: selectedTransaction ? selectedTransaction.name : "",
      projectInitials: selectedTransaction ? selectedTransaction.projectInitials : ""
    }
    
    return result
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
      {isActiveModalCreatePortfolio &&
        <ModalCreatePortfolio
          onCloseModal={() => setIsActiveModalCreatePortfolio(false)}
        />
      }
      {isActiveModalRegisterCoin &&
        <ModalRegisterCoin
          labelTitle={"Register Coin"}
          coinAndPortfolio={chargeTransactionPortfolio()}
          onCloseModal={() => setIsActiveModalRegisterCoin(false)}
        />
      }
      {isActiveModalCreateCoin &&
        <ModalAddTransaction
          labelTitle={"Add Transaction"}
          coinAndPortfolio={chargeTransactionPortfolio()}
          onCloseModal={() => setIsActiveModalCreateCoin(false)}
        />
      }
    </Container>
  )
};