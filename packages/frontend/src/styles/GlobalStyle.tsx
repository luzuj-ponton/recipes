import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    outline: none;
}

button {
    border: none;
}

body {
    height:150vh;
}

`;

export default GlobalStyle;
