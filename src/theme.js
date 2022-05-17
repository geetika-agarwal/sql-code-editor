import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bodyColor: "#EEEEEE",
  fontColor: "#303841",
  buttonColor: "#F05454",
  buttonTextColor: "#fff",
  editorBackgroundColor: "#000",
};

export const darkTheme = {
  bodyColor: "#222831",
  fontColor: "#DDDDDD",
  buttonColor: "#E16428",
  buttonTextColor: "#EEEEEE",
  editorBackgroundColor: "#DDDDDD",
};

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.bodyColor};
        color: ${(props) => props.theme.fontColor}
    }

    button {
      color: ${(props) => props.theme.buttonTextColor};
      background-color: ${(props) => props.theme.buttonColor}
    }

    h1, h2, h3, h4, h5, h6, p, tbody, th{
      color: ${(props) => props.theme.fontColor}
    }
`;
