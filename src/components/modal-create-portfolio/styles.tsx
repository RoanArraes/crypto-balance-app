import styled from "styled-components";
import { PageItemWrapper } from "../../helpers/ItemWrapper";
import { PageText } from "../../helpers/PageText";

export const Wrapper = styled(PageItemWrapper)`
  width: 100%;
  display: ${props => props.display ? props.display : "flex"};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  max-width: ${props => props.maxWidth ? props.maxWidth : "500px"};
  margin: ${props => props.margin ? props.margin : "0px"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : "none"};
`;

export const Label = styled(PageText)`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.fontSize ? props.theme.fontSizes[props.fontSize] : props.theme.fontSizes.small};
  color: ${props => props.color ? props.color : props.theme.colors.white};
  text-shadow: ${props => props.textShadow ? props.theme.shadows.lightWhite0 : "none"};
  text-transform: ${props => props.textUppercase ? "uppercase" : "none"};
  margin: ${props => props.margin ? props.margin : "0px"};
`;

export const WrapperInputs = styled(PageItemWrapper)`
  display: ${props => props.display ? props.display : "flex"};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  max-width: ${props => props.maxWidth ? props.maxWidth : "500px"};
  margin: ${props => props.margin ? props.margin : "0px"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : "none"};
  width: 100%;
`;

export const ErrorMessagesArea = styled(PageItemWrapper)`
  display: ${props => props.display ? props.display : "flex"};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  max-width: ${props => props.maxWidth ? props.maxWidth : "500px"};
  margin: ${props => props.margin ? props.margin : "0px"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : "none"};
  width: 100%;
`;

export const GroupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  margin: 0px;
  flex-wrap: wrap;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  width: 100%;
  color: ${props => props.theme.colors.red}
`;