import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


    html {
    /* HAPPY REM  */
        font-size: 62.5%; 
        /* TERAZ REMY WYNOSZĄ RÓWNE WARTOŚCI NP. 1 REM === 16px  */
    }

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        font-size: 1.6rem; 
        font-family: Montserrat;
    }

`;

export default GlobalStyle;
