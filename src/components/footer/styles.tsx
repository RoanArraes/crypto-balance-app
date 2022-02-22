import styled from "styled-components";

export const FooterArea = styled.div`
  width: 100%;
  height: 30px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label =  styled.div`
  font-family: ${props => props.theme.fonts[1]};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.micro};
  text-transform: uppercase;
  text-shadow: ${props => props.theme.shadows.lightBlack};
`;