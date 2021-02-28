/* eslint-disable no-undef */
import { createGlobalStyle } from "styled-components";
import { DEVICEGUTTER } from "./base";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    width: 100vw;
  }

  body {
    font-size: 16px;
  }

  ul {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:visited {
      color: inherit;
    }
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  .App {
    margin-left: auto;
    margin-right: auto;
    max-width: 1180px;
    position: relative;
    ${DEVICEGUTTER};
  }
`;

export default GlobalStyles;
