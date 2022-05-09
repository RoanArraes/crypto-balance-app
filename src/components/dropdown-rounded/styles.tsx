import styled from "styled-components";

type Props = {
  top?: string
  right?: string
  maxWidth?: string
  visible: boolean
}

export const Container = styled.div<Props>`
  width: 100%;
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : '100px'};
  padding: 10px;
  background-color: ${({ theme, visible }) => visible ? theme.colors.black : 'none'};
  position: absolute;
  top: ${({top}) => top ? top : '250px'};
  right: ${({right}) => right ? right : '50px'};
  border-radius: 5px;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.span`
  width: 100%;
  position: absolute;
  top: -30px;
`;