import styled from 'styled-components';

interface Props {
  maxWidth?: string;
  marginTop?: string;
  colorButton?: string;
}

export const Label = styled.label`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
`;

export const Button = styled.button<Props>`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : '200px'};
  height: 60px;
  margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: ${props => props.colorButton ? props.theme.colors.button[props.colorButton] : props.theme.colors.button.buttonAdd};
  box-shadow: ${props => props.theme.shadows.lightBlack};
  cursor: pointer;

  :hover {
    border: 2px solid ${props => props.theme.colors.black};

    label:nth-child(1) {
      color: ${props => props.theme.colors.white};
      cursor: pointer;
    }
  }
`;