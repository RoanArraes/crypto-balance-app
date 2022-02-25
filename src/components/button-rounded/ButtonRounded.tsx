import React from 'react';

import {
  Button,
  Label
} from './styles';

type Props = {
  label?: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void ;
  maxWidth?: string;
  marginTop?: string;
};

export function ButtonRounded({label, onClick, type, maxWidth, marginTop}: Props) {
  return(
    <Button 
      type={type} 
      onClick={onClick}
      maxWidth={maxWidth}
      marginTop={marginTop}
    >
      <Label>{label}</Label>
    </Button>
  )
}

export default ButtonRounded;