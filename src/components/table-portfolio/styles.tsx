import styled from "styled-components";

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
    cursor: default;

    &:last-child {
      cursor: pointer;
    }
  }
`;