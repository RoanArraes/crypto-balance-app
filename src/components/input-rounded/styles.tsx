import styled from 'styled-components';

interface Props {
  margin?: string,
  maxWidth?: string
  name?: string,
  readOnly?: boolean
}

export const InputField = styled.input<Props>`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : '500px'};
  height: 50px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fonts[1]};
  display: flex;
  text-align: center;
  background-color: ${props => props.theme.colors.input.background};
  margin: ${props => props.margin ? props.margin : '0px'};
  color: ${props => props.theme.colors.white};
  padding: 0px;
  cursor: ${props => props.readOnly ? 'default' : 'pointer'};

  :focus {
    background-color: ${props => props.readOnly ? 'none' : props.theme.colors.input.backgroundHighlight};
    outline-width: 0;
  }
`;