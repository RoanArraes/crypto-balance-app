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
    },
    header: {
      lightBlack: "rgba(0,0,0,0.5)",
      lightBlack2: "rgba(0,0,0,0.7)",
      black: "#000000",
      white:"#FFFFFF"
    },
  },
  fonts: ["sans-serif", "RussoOneRegular"],
  fontSizes: {
    micro: "0.7em",
    small: "1em",
    medium1: "1.2em",
    medium2: "1.6em",
    large: "2.5em",
    extreme: "4em"
  },
  shadows: {
    lightBlack0: "2px 2px 3px rgba(0,0,0,0.2)",
    lightBlack: "2px 2px 3px rgba(0,0,0,0.3)",
    lightWhite0: "2px 2px 3px rgba(255,255,255,0.3)" 
  }
}

const Theme = ({children}: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;