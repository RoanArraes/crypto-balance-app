import styled from "styled-components";

interface Props {
  onClick?: () => void,
  typeButton: string,
  type: string
}

export const Button = styled.button<Props>`
  border: none;
  background-color: transparent;
  color: ${props => props.typeButton === 'remove' ? props.theme.colors.button.buttonDelete : props.theme.colors.button.buttonAdd};
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.fontSizes.buttonFonts.medium};
  cursor: pointer;
`;