import styled from 'styled-components';

export const Label = styled.label`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.white};
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  height: 60px;
  padding: 0px 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;

  :hover {
    background-color: ${props => props.theme.colors.button.hoverButton};
    border-radius: 10px;
    cursor: pointer;
  }
`;