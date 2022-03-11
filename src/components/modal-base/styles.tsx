import styled from 'styled-components';
import { PageItemWrapper } from '../../helpers/ItemWrapper';
import { PageText } from '../../helpers/PageText';

interface Props {
  showModal?: boolean,
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  background-color: ${props => props.theme.colors.rgba.whiteTransparency};
`;

export const ModalArea = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 15px;
  background-color: ${props => props.theme.colors.body.background};
  border-radius: 10px;
`;

export const HeaderArea = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const BodyArea = styled(PageItemWrapper)`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  max-width: ${props => props.maxWidth ? props.maxWidth : "500px"};
  margin: ${props => props.margin ? props.margin : "0px"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
`;

export const Label = styled(PageText)`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.fontSize ? props.theme.fontSizes[props.fontSize] : props.theme.fontSizes.small};
  color: ${props => props.color ? props.color : props.theme.colors.white};
  text-shadow: ${props => props.textShadow ? props.theme.shadows.lightWhite0 : "none"};
  text-transform: ${props => props.textUppercase ? "uppercase" : "none"};
`;