import styled from "styled-components";

export const TableArea = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: thin solid #30323F;
    color: ${props => props.theme.colors.white};

    &:nth-child(1){
      border-bottom: none;
      background-color: ${props => props.theme.colors.black};
    }

    &:last-child(){
      border-bottom: none;
    }
  }

  th {
    text-align: center;
    padding: 10px;
    font-family: ${props => props.theme.fonts[1]};
    font-size: ${props => props.theme.fontSizes.small};
    cursor: default;
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