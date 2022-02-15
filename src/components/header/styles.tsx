import styled from "styled-components";

export const HeaderArea = styled.div`
  text-align: center;
`;

export const Label = styled.label`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.fontSizes.extreme};
  text-transform: uppercase;
  text-shadow: ${props => props.theme.shadows.lightBlack};
`;