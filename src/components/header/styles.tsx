import styled from "styled-components";

export const HeaderArea = styled.div`
  text-align: center;
  margin: 40px 0px 0px 0px;
`;

export const LabelHeader = styled.label`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.fontSizes.extreme};
  text-transform: uppercase;
  text-shadow: ${props => props.theme.shadows.lightBlack0};
  color: ${props => props.theme.colors.black};
`;