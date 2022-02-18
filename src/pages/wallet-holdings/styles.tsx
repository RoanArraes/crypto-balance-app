import styled from "styled-components";
import ImgAlien from '../../utils/assets/images/svg/alien-head.svg';
import ImgAlienWhite from '../../utils/assets/images/svg/alien-head-white.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  background-image: url(${ImgAlien});
  background-repeat: repeat;
  background-position: center;
  background-size: 70px;
  overflow: auto;
`;

export const HeaderArea = styled.div`
  width: 100%;
`;

export const BodyArea = styled.div`
  width: 100%;
  display: block;
  margin-top: auto;
`;

export const FooterArea = styled.div`
  width: 100%;
  margin-top: auto;
  background-color: ${props => props.theme.colors.header.lightBlack};
`;

export const GroupBoxArea = {
  Container: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    overflow-x: hidden;
    overflow-y: auto;
    border: 1px solid transparent;
    border-radius: 10px;
    height: 500px;

    button {
      width: 150px;
;
      label {
        font-size: ${props => props.theme.fontSizes.medium};
      }
    }
  `,
  GroupLabels: styled.div`
    div:nth-child(1) {
      text-align: center;
      label {
        margin: 15px 0px 5px 0px;
        font-size: ${props => props.theme.fontSizes.medium};
        text-shadow: ${props => props.theme.shadows.lightBlack0};
      }
    }

   div:nth-child(2) {
      text-align: center;
      label {
        font-size: ${props => props.theme.fontSizes.medium};
        text-shadow: ${props => props.theme.shadows.lightBlack0};
      }
    }
  `,
  GroupButtonAdd: styled.div`

  `,
  GroupTableHoldings: styled.div`
    width: calc(100% - 20px);
    border: 1px solid black;
    border-radius: 10px;
    height: 640px;
    overflow: auto;
    
    table {
      width: 100%;
    }
  `,
}