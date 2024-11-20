import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #101010;
    font-size: 14px;
    color: #f5f5f5;
    font-family: sans-serif;
  }
`;
