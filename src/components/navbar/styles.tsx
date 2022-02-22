import styled, { ThemedStyledProps } from "styled-components";

interface Props {
  isLinkPage?: boolean;
  theme: ThemedStyledProps<Props, Text>
}

export const ElementList = styled.li<Props>`
  a {
    color: ${props => props.isLinkPage ? props.theme.colors.button.buttonHighligth : props.theme.colors.white};
  }
`;