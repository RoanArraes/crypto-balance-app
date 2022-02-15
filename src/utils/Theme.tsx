import React from 'react';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: React.ReactNode
}

const theme = {
  colors: {
    white: "#FFFFFF",
    buttonHighligth: "#1ECBE1",
    buttonAdd: "#7F9F00",
    black: "#000000",
    redButtonDelete: "#FF0000"
  },
  fonts: ["sans-serif", "Russo One"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}

const Theme = ({children}: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;