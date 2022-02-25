import styled from 'styled-components';

interface Props {
  isSelected: boolean
}

export const Label = styled.label`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.white};
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<Props>`
  height: 60px;
  padding: 0px 10px;
  border: none;
  background-color: ${props => props.isSelected ? props.theme.colors.button.clickButton : "transparent"};
  border-radius: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
`;