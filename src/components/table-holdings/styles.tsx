import styled from "styled-components";

export const TableArea = styled.table`
  width: 100%;
  font-family: ${props => props.theme.fonts[1]};
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid black;

    &:nth-child(odd){
      background-color: aliceblue;
    }
    &:nth-child(1){
      background-color: ${props => props.theme.colors.black};
      color: ${props => props.theme.colors.white};
    }
  }

  th {
    text-align: center;
    padding: 10px;
    text-transform: uppercase;
  }

  td {
    max-width: 50px;
    text-align: center;
    padding: 10px;
    overflow: hidden;
    text-overflow: ellipsis;

    &:nth-child(1) {
      max-width: 70px;
    }

    &:nth-last-child(1) {
      max-width: 90px;
    }
  }
`;