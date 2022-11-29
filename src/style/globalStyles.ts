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
        position: relative;
    }

    body {
        background-color: #13131F;
        color: #fff;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;