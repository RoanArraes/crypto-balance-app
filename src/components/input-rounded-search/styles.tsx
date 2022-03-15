import styled from 'styled-components';
import { PageItemWrapper } from '../../helpers/ItemWrapper';
import SearchIconSvg from '../../utils/assets/icons/search-icon.svg';

interface Props {
  margin?: string,
  maxWidth?: string
}

export const InputField = styled.input<Props>`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : 'none'};
  box-sizing: border-box;
  height: 50px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fonts[1]};
  display: flex;
  text-align: flex-start;
  background-color: ${props => props.theme.colors.input.background};
  margin: ${props => props.margin ? props.margin : '0px'};
  color: ${props => props.theme.colors.white};
  padding: 0px 20px 0px 50px;
  z-index: 998;

  :focus {
    background-color: ${props => props.theme.colors.input.backgroundHighlight};
    outline-width: 0;
}
`;

export const SearchIcon = styled.span`
  width: 30px;
  height: 30px;
  background-image: url(${SearchIconSvg});
  background-repeat: no-repeat;
  background-position:center;
  background-size: 30px;
  margin-right: -40px;
  z-index: 999;
`;

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