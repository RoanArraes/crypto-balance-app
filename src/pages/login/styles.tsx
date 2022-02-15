import styled from 'styled-components';
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
  margin: 140px 40px 10px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:nth-child(1) {
    margin-bottom: 30px;
  }
  div:nth-child(2) {
    margin-bottom: 30px;
  }
`;

export const InputArea = styled.div`
  width: 280px;
`;

export const ButtonArea = styled.div`
  width: 260px;
`;