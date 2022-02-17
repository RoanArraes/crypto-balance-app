import styled from "styled-components";

export const Box = 
{
  Container: styled.div`
    width: calc(100% - 80px);
    height: calc(100% - 100px);
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-shadow: ${props => props.theme.shadows.lightBlack};
  `,
  AreaLeft: styled.div`
    width: 20%;
    height: calc(100% - 30px);
  `,
  AreaRight: styled.div`
    width: 70%;
    height: calc(100% - 30px);
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 10px;
  `,
};