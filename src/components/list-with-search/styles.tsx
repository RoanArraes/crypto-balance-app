import styled from 'styled-components';
import { PageItemWrapper } from '../../helpers/ItemWrapper';
import { PageText as LabelItem} from '../../helpers/PageText';

interface Props {
  maxHeight?: string;
}

export const WrapperList = styled(PageItemWrapper)`
  width: 100%;
  display: ${props => props.display ? props.display : "flex"};
  flex-direction: column;
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  max-width: ${props => props.maxWidth ? props.maxWidth : "500px"};
  margin: ${props => props.margin ? props.margin : "0px"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : "none"};
`;

export const ListItems = {
  Area: styled.div<Props>`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    max-height: ${props => props.maxHeight ? props.maxHeight : 'none'};
    overflow-x: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar {
      display: none;
    }
  `,
  Item: styled.span`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid ${props => props.theme.colors.rgba.whiteTransparency};
    padding: 10px 0px;
    cursor: pointer;

    :last-child {
      border-bottom: none;
    }

    &:hover {
      .label-list-search {
        color: ${props => props.theme.colors.button.buttonHighligth};
      }
    }
  `,
  Label: styled(LabelItem)`
    font-family: ${props => props.theme.fonts[1]};
    font-size: ${props => props.fontSize ? props.theme.fontSizes[props.fontSize] : props.theme.fontSizes.small};
    color: ${props => props.color ? props.color : props.theme.colors.white};
    text-shadow: ${props => props.textShadow ? props.theme.shadows.lightWhite0 : "none"};
    text-transform: ${props => props.textUppercase ? "uppercase" : "none"};
    margin-left: 20px;

  `,
  ImageItem: styled.span`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
  `
} 