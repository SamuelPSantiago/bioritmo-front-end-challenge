import styled from 'styled-components'

// Todas as cores ultilizadas dentro da página

const Black = '#000'
const DarkGrey = '#333333';
const LightGrey = '#808080';
const Yellow = '#FFB612';
const Red = '#dc0a17';
const Green = '#2FC022';

// Todos os tipos de textos ultilizdos dentro da página

export const TextTitle = styled.h1`
    font-family: 'Gotham', sans-serif;
    font-weight: 900;
    font-size: 40px;
    line-height: 45px;
    letter-spacing: 0.3px;

    color: ${DarkGrey};
`

export const TextBody = styled.p`
    width: 100%;
    height: auto;

    font-family: 'Gotham', sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 18px;

    color: ${DarkGrey};
`

// Área preta da Logo

export const LogoBackground = styled.div`
    background-color: ${Black};
    width: 100%;
    height: 110px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
    width: auto;
    height: 65px;
`

// Área do cabeçalho com o título e descrição

export const Introduction = styled.div`
    margin: 75px 10% 0 10%;

    width: 80%;
    height: auto;
`

export const IntroductionSpacer = styled.div`
    margin: 25px 0 45px 0;

    width: 100px;
    height: 9px;

    background-color: ${DarkGrey};
`