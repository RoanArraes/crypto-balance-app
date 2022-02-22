import styled from "styled-components";

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
  GroupLabels: styled.div`
    div:nth-child(1) {
      text-align: center;
      label {
        font-size: ${props => props.theme.fontSizes.medium1};
        text-shadow: ${props => props.theme.shadows.lightBlack0};
        color: ${props => props.theme.colors.white};
      }
    }

   div:nth-child(2) {
      text-align: center;
      label {
        font-size: ${props => props.theme.fontSizes.medium};
        text-shadow: ${props => props.theme.shadows.lightBlack0};
        color: ${props => props.theme.colors.white};
      }
    }
  `,
  GroupButtonAdd: styled.div`

  `,
  GroupTableHoldings: styled.div`
    width: calc(100% - 20px);
    margin-top: 20px;
    border: 1px solid transparent;
    border-radius: 10px;
    overflow: hidden;
    
    table {
      width: 100%;
    }
  `,
}