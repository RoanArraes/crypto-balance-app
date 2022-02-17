import styled from "styled-components";
import ImgAlien from '../../utils/assets/images/svg/alien-head.svg';

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
  background-size: 80px;
`;

export const HeaderArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  div:nth-child(1) {
    margin: 20px 40px 20px 40px;
  };

  div:nth-child(2) {
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.colors.black};
    display: flex;
    align-items: center;

    ul {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      list-style-type: none;
      padding-left: 20px;

      li {
        padding-right: 20px;

        a {
          color: ${props => props.theme.colors.white};
          font-family: ${props => props.theme.fonts[1]};
          text-transform: uppercase;
          text-decoration: none;

          :hover {
            color: ${props => props.theme.colors.buttonHighligth}
          }
        } 

      }
    }
  }
`;

export const BodyArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterArea = styled.div`
  width: 100%;
`;

export const GroupBoxArea = {
  Left: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    label:nth-child(1) {
      margin: 15px 0px 5px 0px ;
    }

    label:nth-child(2) {
      margin-left: 10px;
    }
  `,
  Right: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    label:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
    }

  `,
}