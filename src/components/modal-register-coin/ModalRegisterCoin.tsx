import { useEffect, useState } from 'react';

import {
  Container,
  Wrapper,
  Label,
} from './styles';

import {
  ListWithSearch,
  SelectRounded,
  ModalBase
} from '..';

import { OPTIONS_ADD_TRANSACTIONS } from '../../utils/constants/select-options';
import { 
  RegisterTransactionInterface,
  SelectedPortfolioAndCoinInterface
} from '../../utils/interfaces';

import FormBuyAndSell from './components/form-buy-and-sell/FormBuyAndSell';
import FormTransferInOut from './components/form-transfer-in-out/FormTransferInOut';


const initialFormState: RegisterTransactionInterface = {
  idUser: "",
  idCoin: "",
  type: "buy",
  date: '0' + new Date().toLocaleDateString(),
  quantity: "0",
  price: "0",
  totalValue: "0",
  fees: "0",
  notes: "",
  time: "",
};

const initialSelectedCoinPortfolioCoin: SelectedPortfolioAndCoinInterface = {
  idPortfolio: '',
  idCoin: '',
  nameCoin: '',
  projectInitials: ''
}

type ModalProps = {
  coinAndPortfolio?: SelectedPortfolioAndCoinInterface;
  onCloseModal: () => void,
  labelTitle?: string
}

export default function ModalRegisterCoin({ 
  coinAndPortfolio,
  onCloseModal,
  labelTitle
}: ModalProps) {

  const [selectedCoin, setSelectedCoin] = useState<SelectedPortfolioAndCoinInterface>(initialSelectedCoinPortfolioCoin);
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    if(coinAndPortfolio && coinAndPortfolio.idPortfolio !== "") {
      setSelectedCoin(coinAndPortfolio)
    }
  },[coinAndPortfolio])

  function submitForm(f: RegisterTransactionInterface) {

    const formEdited = {
      ...form,
      ...f,
      idCoin: selectedCoin.idCoin,
      idPortfolio: selectedCoin.idPortfolio
    }

    console.log("form", formEdited);
  }

  return(
    <ModalBase 
      labelTitle={labelTitle ? labelTitle : "Add Transaction"}
      onCloseModal={onCloseModal}
      children={
        <Container>
          {(selectedCoin && selectedCoin.idCoin === "") ?
            <Wrapper
              flexDirection='column'
              alignItems='flex-start'
              maxWidth='500px'
              flexWrap="wrap"
            >
              <Label
                fontSize='micro'
              >
                Search coin
              </Label>
              <ListWithSearch
                maxHeight="400px"
                onClickItem={(coin) => setSelectedCoin({...selectedCoin, ...coin})}
              />
            </Wrapper>
          : (selectedCoin && selectedCoin.idCoin !== "") &&
            <Wrapper
              flexDirection='column'
              alignItems='flex-start'
              maxWidth='500px'
              flexWrap="wrap"
            >
              <Label fontSize='medium1'>{selectedCoin.nameCoin} - {selectedCoin.projectInitials}</Label>
              <Label fontSize='micro'>Type</Label>
              <SelectRounded 
                options={OPTIONS_ADD_TRANSACTIONS}
                onChange={(e)=> setForm({...form, type: e.currentTarget.value})}
              />
              {(form.type === 'buy' || form.type === 'sell') ?
                  <FormBuyAndSell 
                    onSubmitForm={(formBuyAndSell) => submitForm(formBuyAndSell)}
                  />
                :
                  <FormTransferInOut 
                    onSubmitForm={(formTransferInOut) => submitForm(formTransferInOut)}
                  />
              }
            </Wrapper>
          }
        </Container>
      }
    />
  )
};