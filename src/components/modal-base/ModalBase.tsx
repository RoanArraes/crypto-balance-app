import 
{
  Container,
  HeaderArea,
  BodyArea,
  ModalArea,
  Label
} from './styles';

import {
  ButtonTypes
} from '../'

interface Props {
  labelTitle?: string,
  children: React.ReactNode,
  onCloseModal: () => void
};

export default function ModalBase({ 
  children, 
  labelTitle, 
  onCloseModal 
}: Props) {
  
  const closeModal = () => {
    onCloseModal();
  }

  return(
    <Container>
      <ModalArea>
        <HeaderArea>
          <Label
            fontSize='medium1'
          >
            { labelTitle }
          </Label>
          <ButtonTypes
            typeButton="remove"
            type="button"
            onClick={() => { closeModal() }}
          />
        </HeaderArea>
        <BodyArea
          justifyContent='center'
          maxWidth='600px'
          flexDirection='column'
        >
          { children }
        </BodyArea>
      </ModalArea>
    </Container>
  )
}
