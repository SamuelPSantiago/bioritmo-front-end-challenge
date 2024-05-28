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

export const HeaderFormTextTitle = styled.h1`
    font-family: 'Gotham', sans-serif;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 0.3px;

    color: ${Grey};
`

export const QuestionFormTextTitle = styled.h1`
    margin: 0 0 11px 10px;
    font-family: 'Gotham', sans-serif;
    font-weight: 300;
    font-size: 27px;
    line-height: 34px;
    letter-spacing: 0.3px;

    color: ${Grey};
`


export const LabelForm = styled.h2`
    margin: 0 8px 0 10px;
    font-family: 'Gotham', sans-serif;
    font-weight: 400;
    font-size: 17px;
    letter-spacing: 0.3px;

    color: ${Black};
`

export const ResultNumberForm = styled.h1`
    font-family: 'Gotham', sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.3px;

    color: ${DarkGrey};
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

export const TimeFormTextBody = styled.h1`
    margin: 0 0 0 10px;
    font-family: 'Gotham', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 0.3px;

    color: ${Grey};
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

// Área do formulário de busca

export const Form = styled.form`
    margin: 45px 10% 0 10%;

    width: 80%;
    height: auto;
    
    padding: 20px 0 20px 0;

    border-radius: 10px;
    border: 3px solid ${LightGrey};
    border-bottom-width: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const HeaderForm = styled.div`
    margin: 0 25px 20px 25px;

    width: calc(100% - 50px);
    height: auto;

    display: flex;
    align-items: center;
    justify-content: left;
`

export const IconHeaderForm = styled.img`
    margin: 0 9px 0 0;

    width: 30px;
    height: auto;
`

export const QuestionForm = styled.div`
    margin: 0 25px 0 25px 0;

    width: calc(100% - 50px);
    height: auto;

    border-bottom: 2px solid ${LightGrey};
`

export const ItemForm = styled.input.attrs({ type: 'radio' })`
    width: 18px;
    height: 18px;

    border: 2px solid ${Grey};
    border-radius: 100%;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;

    cursor: pointer;

    &:hover {
        border: 2px solid ${DarkGrey};
    }

    &:checked {
        border: 2px solid ${Grey};
        background-color: ${Grey};
    }

    &:checked:hover {
        border: 2px solid ${DarkGrey};
        background-color: ${DarkGrey};
    }
`

export const Line1Form = styled.div`
    margin: 0 25px 0 25px;

    width: calc(100% - 50px);
    height: auto;

    border-bottom: 2px solid ${LightGrey};

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Line2Form = styled.div`
    margin: 50px 25px 25px 25px;

    width: calc(100% - 50px);
    height: auto;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SubLineForm = styled.div`
    width: auto;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: left;
`

export const FilterForm = styled.input.attrs({ type: 'checkbox' })`
    width: 18px;
    height: 18px;

    border: 2px solid ${Grey};
    border-radius: 2px;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    
    cursor: pointer;

    &:hover {
        border: 2px solid ${DarkGrey};
    }

    &:checked {
        border: 2px solid ${Grey};
        background-color: ${Grey};
    }

    &:checked:hover {
        border: 2px solid ${DarkGrey};
        background-color: ${DarkGrey};
    }
`

export const ButtonsForm = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const SearchButtonForm = styled.button`
    width: 300px;
    height: 50px;

    border-radius: 3px;
    border: none;

    background-color: ${Yellow};

    font-family: 'Gotham', sans-serif;
    font-weight: 700;
    font-size: 15px;
    text-align: center;

    color: ${Black};

    cursor: pointer;
`
export const ClearButtonForm = styled.button`
    width: 300px;
    height: 50px;

    border-radius: 3px;
    border: 2px solid ${LightGrey};

    background-color: ${White};

    font-family: 'Gotham', sans-serif;
    font-weight: 700;
    font-size: 15px;
    text-align: center;

    color: ${Black};

    cursor: pointer;
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