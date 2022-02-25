import styled from 'styled-components';

interface Props {
  width?: string;
  maxWidth?: string;
  margin?: string;
}

export const Select = styled.select<Props>`
  width: ${props => props.width ? props.width : "100px"};
  max-width: ${props => props.maxWidth ? props.maxWidth : "100px"};
  margin: ${props => props.margin ? props.margin : "0px"};
  background-color: ${props => props.theme.colors.input.background};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts[2]};
  font-size: ${props => props.theme.fontSizes.small};
  padding: 10px;
`;