import styled from 'styled-components'

// Todas as cores ultilizadas dentro da página

const Black = '#000'
const DarkGrey = '#333333';
const Grey = '#808080';
const LightGrey = '#F5F5F5';
const White = '#fff';
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
    font-size: 17px;

    color: ${DarkGrey};
`

export const VariationLegendTextBody = styled.p`
    width: 100%;
    height: auto;

    font-family: 'Gotham', sans-serif;
    font-weight: 400;
    font-size: 17px;
    text-align: center;

    color: ${Black};
`

export const LegendTextTitle = styled.p`
    width: 100%;
    height: auto;

    font-family: 'Gotham', sans-serif;
    font-weight: 900;
    font-size: 16px;
    text-align: center;

    color: ${Black};
`

// Área do cabeçalho

export const Header = styled.header``

export const BottomHeader = styled.div`
    margin: 75px 10% 0 10%;

    width: 80%;
    height: auto;
`

export const BottomHeaderSpacer = styled.div`
    margin: 25px 0 45px 0;

    width: 100px;
    height: 9px;

    background-color: ${DarkGrey};
`

// Área das legendas

export const Legend = styled.div`
    margin: 45px 10% 0 10%;

    width: 80%;

    @media (max-width: 660px) {
        height: 700px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 660px) and (max-width: 1145px) {
        height: 350px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 0px;
    }

    @media (min-width: 1145px) {
        height: 175px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    background-color: ${LightGrey};
`

export const Area1Legend = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: center;

    @media (max-width: 1145px) {
        width: 100%;
    }

    @media (min-width: 1145px) {
        width: 28%;
    }
`

export const Area2Legend = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: center;

    @media (max-width: 1145px) {
        width: 100%;
    }

    @media (min-width: 1145px) {
        width: 16%;
    }
`

export const ContainerVariationLegend = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Variation1Legend = styled.div`
    flex: 1;
    height: auto;

    min-width: 114px;
    max-width: 122px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Variation2Legend = styled.div`
    width: 77px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Variation3Legend = styled.div`
    width: 83px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const IconLegend = styled.img`
    margin: 15px 0 0 0;
    width: 70px;
    height: auto;
`