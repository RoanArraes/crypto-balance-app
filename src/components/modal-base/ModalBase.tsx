import React, { useEffect, useState } from 'react';

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
  children: React.ReactNode,
  showModal: boolean | null,
  onCloseModal: () => void
};

export default function ModalBase({ showModal, children, onCloseModal }: Props) {

  const[ isActive, setIsActive ] = useState(false);

  useEffect(() => {
    if(showModal !== null) {
      setIsActive(showModal);
    }
  }, [showModal])

  const closeModal = () => {
    onCloseModal();
    setIsActive(false);
  }

  return(
    <Container showModal={isActive}>
      <ModalArea>
        <HeaderArea>
          <Label
            textUppercase
            fontSize='medium1'
          >
            Create portfolio
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
          {children}
        </BodyArea>
      </ModalArea>
    </Container>
  )
}
