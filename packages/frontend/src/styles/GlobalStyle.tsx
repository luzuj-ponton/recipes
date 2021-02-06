import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
}

button {
    border: none;
    outline: none;
}

body {
    height:150vh;
}

`;

export default GlobalStyle;
