import styled from 'styled-components';

export const InputArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputField = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 10px;
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fonts[1]};
  display: flex;
  text-align: center;
  padding: 0px 5px 0px 5px;
  box-shadow: ${props => props.theme.shadows.lightBlack};
  background-color: ${props => props.theme.colors.rgba.whiteTransparency};
`;

export const Label = styled.label`
  width: 100%;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.fontSizes.medium};
  text-shadow: ${props => props.theme.shadows.lightBlack};
  margin-bottom: 10px;
`;