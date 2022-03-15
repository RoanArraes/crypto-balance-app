import React from 'react';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: React.ReactNode
}

const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    red: "#FF0000",
    rgba: {
      whiteTransparency: "rgba(255,255,255,0.3)"
    },
    header: {
      lightBlack: "rgba(0,0,0,0.5)",
      lightBlack2: "rgba(0,0,0,0.7)",
      black: "#000000",
      white:"#FFFFFF"
    },
    body: {
      background: "#1a1b22"
    },
    footer: {
      background: "rgba(0,0,0,0.5)",
    },
    button: {
      buttonDelete: "#FF0000",
      buttonAdd: "#FFBE0B",
      buttonHighligth: "#1ECBE1",
      hoverButton: "#30323F",
      clickButton: "#30323F",
      buttonBack: "rgba(255,255,255,0.3)"
    },
    input: {
      background: "#30323F",
      backgroundHighlight: "rgba(255,255,255,0.3)",
    },
    table: {
      background: "#000000"
    }
  },
  fonts: ["sans-serif", "RussoOneRegular", "ZenKakuGothicAntiqueRegular"],
  fontSizes: {
    micro: "0.9em",
    small: "1em",
    medium1: "1.2em",
    medium2: "1.6em",
    large: "2.5em",
    extreme: "8em",
    buttonFonts: {
      micro: "0.7em",
      small: "1em",
      medium: "1.2em",
    }
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