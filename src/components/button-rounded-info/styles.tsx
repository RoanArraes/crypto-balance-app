import styled from 'styled-components';

export const Label = styled.label`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px 5px 0px;
`;

export const Button = styled.button`
  height: 60px;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.rgba.whiteTransparency};
  border: 1px solid ${props => props.theme.colors.black};
  box-shadow: ${props => props.theme.shadows.lightBlack};
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;

  :hover {
    border: 2px solid ${props => props.theme.colors.black};

    label:nth-child(1) {
      color: ${props => props.theme.colors.black};
      cursor: pointer;
    }
  }
`;