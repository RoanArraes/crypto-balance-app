import React from 'react';

import {
  ButtonArea,
  Button,
  Label
} from './styles';

type Props = {
  label?: string;
  type: 'button' | 'submit' | 'reset';
};

export function ButtonRounded({label, type}: Props) {
  return(
    <ButtonArea>
      <Button type={type}>
        <Label>{label}</Label>
      </Button>
    </ButtonArea>
  )
}

export default ButtonRounded;