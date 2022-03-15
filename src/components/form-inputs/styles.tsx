import styled from "styled-components";
import { PageText } from "../../helpers/PageText";
import { PageItemWrapper } from "../../helpers/ItemWrapper";

interface Props {
  margin?: string,
  maxWidth?: string
  name?: string,
}

export const Wrapper = styled(PageItemWrapper)`
  display: ${props => props.display ? props.display : "flex"};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  max-width: ${props => props.maxWidth ? props.maxWidth : "none"};
  margin: ${props => props.margin ? props.margin : "0px"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : "none"};
  width: 100%;
`;

export const InputField = styled.input<Props>`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : 'none'};
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
  padding: 0 10px;

  :focus {
    background-color: ${props => props.theme.colors.input.backgroundHighlight};
    outline-width: 0;
  }
`;

export const Label = styled(PageText)`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.fontSize ? props.theme.fontSizes[props.fontSize] : props.theme.fontSizes.small};
  color: ${props => props.color ? props.color : props.theme.colors.white};
  text-shadow: ${props => props.textShadow ? props.theme.shadows.lightWhite0 : "none"};
  text-transform: ${props => props.textUppercase ? "uppercase" : "none"};
  margin: 10px 0px 5px 0px;
`;