import { 
  ButtonRounded,
  InputRounded
 } from '../../../components';

import {
  Wrapper,
  Label
} from '../styles';

interface Props {
  submitModalCreate: (e: React.ChangeEvent<HTMLInputElement>) => void
  nameLength: number
}

export const ModalCreatePortfolio = ({
  submitModalCreate,
  nameLength
}: Props) => {
  return(
    <Wrapper
      flexDirection='column'
      alignItems='flex-start'
      justifyContent='center'
      margin='10px'
      maxWidth='500px'
      flexWrap="wrap"
    >
      <Label
        fontSize='micro'
      >
        Portfolio name
      </Label>
      <InputRounded 
        placeholder="Insert portfolio name" 
        type="text" 
        maxWidth='493px'
        width='100%'
        margin="10px 0px"
        onChange={(e) => submitModalCreate(e)}
        maxLength={32}
      />
      <Label
        fontSize='micro'
      >
        {nameLength}/32 caracteres
      </Label>
      <ButtonRounded 
        type='button' 
        label='create'
        maxWidth='500px'
        marginTop='20px'
      />
    </Wrapper>
  )
}