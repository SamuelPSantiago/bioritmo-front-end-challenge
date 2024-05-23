import styled from 'styled-components'

// Todas as cores ultilizadas dentro do componente

const DarkGrey = '#333333';
const White = '#fff';

export const MyFooter = styled.footer`
    margin: 65px 0 0 0;

    width: 100%;
    height: auto;

    padding: 50px 0 110px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${DarkGrey};
`

export const Logo = styled.img`
    margin: 0 0 20px 0;

    width: auto;
    height: 40px;
`

export const TextBody = styled.p`
    width: 100%;
    height: auto;

    font-family: 'Gotham', sans-serif;
    font-weight: 300;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 16px;
    text-align: center;

    color: ${White};
`