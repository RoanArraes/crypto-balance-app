import styled from 'styled-components';

interface Props {
  margin?: string,
  maxWidth?: string
}

export const InputField = styled.input<Props>`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : '300px'};
  height: 50px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fonts[1]};
  display: flex;
  text-align: center;
  background-color: ${props => props.theme.colors.rgba.whiteTransparency};
  margin: ${props => props.margin ? props.margin : '0px'}
`;