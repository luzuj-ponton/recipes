import { Color } from "src/enums/color.enum";
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

::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${Color.Bone};
}
::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${Color.Red};
}
`;

export default GlobalStyle;
