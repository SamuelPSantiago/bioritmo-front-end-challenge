import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    // Importação da fonte ultilizada

    @font-face {
        font-family: 'Gotham';
        src: url('/src/assets/fonts/gotham-light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('/src/assets/fonts/gotham-book.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('/src/assets/fonts/gotham-bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('/src/assets/fonts/gotham-black.woff2') format('woff2');
        font-weight: 900;
        font-style: normal;
    }

    // Configuração geral da página

    * {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyles