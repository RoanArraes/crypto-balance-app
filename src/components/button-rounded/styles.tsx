import styled from 'styled-components';

export const Label = styled.label`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.button.buttonAdd};
  box-shadow: ${props => props.theme.shadows.lightBlack};
  cursor: pointer;

  :hover {
    border: 2px solid ${props => props.theme.colors.black};

    label:nth-child(1) {
      color: ${props => props.theme.colors.black};
      cursor: pointer;
    }
  }
`;