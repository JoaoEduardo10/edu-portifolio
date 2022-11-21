import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0%;
        margin: 0%;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: #13131F;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;