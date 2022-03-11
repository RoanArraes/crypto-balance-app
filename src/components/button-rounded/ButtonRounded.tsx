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
  colorButton?: string;
};

export function ButtonRounded({
  label,
  onClick,
  type,
  maxWidth,
  marginTop,
  colorButton,
}: Props) {
  return(
    <Button 
      type={type} 
      onClick={onClick}
      maxWidth={maxWidth}
      marginTop={marginTop}
      colorButton={colorButton}
    >
      <Label>
        {label}
      </Label>
    </Button>
  )
}

export default ButtonRounded;