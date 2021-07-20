import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
    }
    body{
        position:relative;
        min-height: 100vh;
    }
    a{
        text-decoration:none;
        color:#000;
    }
    .inner{
        max-width: 1100px;
        margin: 0 auto;
        position:relative;
    }
`;
