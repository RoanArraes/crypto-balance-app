import styled from "styled-components";

export const HeaderArea = styled.div`
  height: 50px;
  display: flex;
  padding-left: 20px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  background-color: ${props => props.theme.colors.header.black};
  box-shadow: ${props => props.theme.shadows.lightBlack};

  ul {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    padding-left: 20px;

    li {
      padding: 0px 10px;
      border-right: 1px solid ${props => props.theme.colors.white};

      &:last-child {
        border: none;
      }

      a {
        font-family: ${props => props.theme.fonts[1]};
        font-size: ${props => props.theme.fontSizes.small};
        text-transform: uppercase;
        text-decoration: none;
        text-shadow: ${props => props.theme.shadows.lightBlack0};

        &:hover {
          color: ${props => props.theme.colors.button.buttonHighligth};
        }
      } 
    }
  }
`;

export const LabelHeader = styled.label`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.fontSizes.medium2};
  text-transform: uppercase;
  text-shadow: ${props => props.theme.shadows.lightBlack0};
  color: ${props => props.theme.colors.white};
`;