import { useState } from 'react';

import {
  Container,
  Wrapper,
  Label,
} from './styles';

import {
  ListWithSearch,
  SelectRounded,
  ModalBase
} from '../';

import { OPTIONS_ADD_TRANSACTIONS } from '../../utils/constants/select-options';
import { 
  ListCoinsInterface,
  RegisterTransactionInterface 
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

const initialSelectedCoin: ListCoinsInterface = {
  name: "",
  id: "",
  projectInitials: ""
};

type ModalProps = {
  coin?: string;
  onCloseModal: () => void
}

export default function ModalAddTransaction({ 
  coin,
  onCloseModal 
}: ModalProps) {

  const [selectedCoin, setSelectedCoin] = useState<ListCoinsInterface>(initialSelectedCoin);
  const [form, setForm] = useState(initialFormState);

  function submitForm(f: RegisterTransactionInterface) {

    const formEdited = {
      ...form,
      ...f,
      idCoin: selectedCoin.id
    }

    console.log("form", formEdited);
  }

  return(
    <ModalBase 
      labelTitle="Create Portfolio"
      onCloseModal={onCloseModal}
      children={
        <Container>
          {!coin && (selectedCoin && selectedCoin.id === "") ?
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
                onClickItem={(coin) => setSelectedCoin(coin)}
              />
            </Wrapper>
          : (coin || (selectedCoin && selectedCoin.id !== "")) &&
            <Wrapper
              flexDirection='column'
              alignItems='flex-start'
              maxWidth='500px'
              flexWrap="wrap"
            >
              <Label fontSize='medium1'>{selectedCoin.name} - {selectedCoin.projectInitials}</Label>
              <Label fontSize='micro'>Type</Label>
              <SelectRounded 
                options={OPTIONS_ADD_TRANSACTIONS}
                width={'100%'}
                maxWidth={'500px'}
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