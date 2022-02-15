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
    redButtonDelete: "#FF0000",
    rgba: {
      whiteTransparency: "rgba(255,255,255,0.5)"
    }
  },
  fonts: ["sans-serif", "RussoOneRegular"],
  fontSizes: {
    micro: "0.7em",
    small: "1em",
    medium: "1.2em",
    large: "2.5em",
    extreme: "4em"
  },
  shadows: {
    lightBlack: "2px 2px 3px rgb(0,0,0,0.1)"
  }
}

const Theme = ({children}: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;