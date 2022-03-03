import styled from "styled-components";
import { PageItemWrapper } from "../../helpers/ItemWrapper";
import { PageText } from "../../helpers/PageText";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  background-color: ${props => props.theme.colors.body.background};
  overflow: auto;
`;

export const HeaderArea = styled.div`
  width: 100%;
`;

export const BodyArea = styled.div`
  width: 100%;
  display: block;
`;

export const FooterArea = styled.div`
  width: 100%;
  margin-top: auto;
  background-color: ${props => props.theme.colors.footer.background};
`;

export const GroupBoxArea = {
  Container: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  `,
  Left: styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    min-width: 200px;
  `,
  Right: styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    label:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      text-shadow: ${props => props.theme.shadows.lightBlack0};
    }
  `,
  GroupButtonInfoHolding: styled.div`
    margin: 20px 0px 20px 0;

    button {
      width: 150px;
;
      label {
        font-size: ${props => props.theme.fontSizes.medium1};
      }
    }
  `,
  GroupButtonAdd: styled.div`

  `,
  InfoMessage: styled.div`
    padding: 20px 0px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.white};
    text-align: center;
  `,
  GroupTableHoldings: styled.div`
    width: calc(100% - 40px);
  `,
}

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
`;