import styled from "styled-components";
import { PageItemWrapper } from "../../helpers/ItemWrapper";
import { PageText } from "../../helpers/PageText";

export const TableWrapper = styled(PageItemWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableArea = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      border-bottom: none;
      background-color: ${props => props.theme.colors.black};
      color: ${props => props.theme.colors.white};

      th {
        text-align: center;
        padding: 10px 0px;
        font-family: ${props => props.theme.fonts[1]};
        font-size: ${props => props.theme.fontSizes.small};
        cursor: default;
      }
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #30323F;
      color: ${props => props.theme.colors.white};

      &:last-child {
        border-bottom: none;
      }
    }
  }



  td {
    font-family: ${props => props.theme.fonts[2]};
    font-size: ${props => props.theme.fontSizes.small};
    max-width: 50px;
    text-align: center;
    padding: 20px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &:last-child {
      cursor: pointer;
    }
  }
`;

export const Label = styled(PageText)`
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.fontSize ? props.theme.fontSizes[props.fontSize] : props.theme.fontSizes.medium1};
  color: ${props => props.color ? props.color : props.theme.colors.white};
  text-shadow: ${props => props.textShadow ? props.theme.shadows.lightWhite0 : "none"};
  text-transform: ${props => props.textUppercase ? "uppercase" : "none"};
  margin-bottom: 20px;
`;