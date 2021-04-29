import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #393939;
    --orange: #f07f0e;
    --light-grey: #f0efed;

  }
  html {
    font-size: 10px;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
    font-family: sans-serif;
  }

  button {
    border: 0;
    border-radius: 5px;
    background-color: var(--orange);
  }

  input {
    border-radius: 2px;
    border: 1px solid var(--light-grey);
  }

  .container {
    max-width: 1280px;
  }

  .inner-content {
    max-width: 800px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
