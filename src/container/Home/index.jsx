import React, { useState } from 'react';

import getUnits from '../../services/getUnits';
import filterUnits from '../../services/filterUnits';

import Footer from '../../components/Footer'
import TopLogo from '../../components/TopLogo'

import { TextTitle, HeaderFormTextTitle, QuestionFormTextTitle, LegendTextTitle, TextBody, TimeFormTextBody, VariationLegendTextBody } from "./style"
import { Header, BottomHeader, BottomHeaderSpacer } from "./style"
import { Form, HeaderForm, IconHeaderForm, QuestionForm, ItemForm, Line1Form, Line2Form, SubLineForm, FilterForm, LabelForm, ResultNumberForm, ButtonsForm, SearchButtonForm, ClearButtonForm } from './style'
import { Legend, Area1Legend, Area2Legend, ContainerVariationLegend, Variation1Legend, Variation2Legend, Variation3Legend, IconLegend } from "./style"

function Home() {
    //Armazenamento da quantidade de resultados vindos do formulário
    const [resultsFound, setResultsFound] = useState('0');

    //Armazenamento dos dados do formulário
    const [formData, setFormData] = useState({
        timeFilter: '',
        closeFilter: false
    });

    //Função de setar os dados do formulário
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    //Função de limpar o formulário
    const handleClearForm = () => {
        setFormData({
            timeFilter: '',
            closeFilter: false
        });
        setResultsFound('0');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            var data = await getUnits(); //Recebe os dados da API
            var dataFiltered = await filterUnits(data, formData); //Filtra os dados recebidos

            setResultsFound(dataFiltered.total); //Altera a quantidade de resultados para exibir na tela
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }
    };

    return (
        <>
            <Header>
                <TopLogo />
                <BottomHeader>
                    <TextTitle>REABERTURA <br /> SMART FIT</TextTitle>
                    <BottomHeaderSpacer></BottomHeaderSpacer>
                    <TextBody>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</TextBody>
                </BottomHeader>
            </Header>
            <Form onSubmit={handleSubmit}>
                <HeaderForm>
                    <IconHeaderForm src={'./icon-hour.png'} alt="IconTimeForm" />
                    <HeaderFormTextTitle>Horário</HeaderFormTextTitle>
                </HeaderForm>
                <QuestionForm>
                    <QuestionFormTextTitle>Qual período quer treinar?</QuestionFormTextTitle>
                </QuestionForm>
                <Line1Form>
                    <SubLineForm>
                        <ItemForm
                            type='radio'
                            id="timeFilterM"
                            name="timeFilter"
                            value="M"
                            checked={formData.timeFilter === 'M'}
                            onChange={handleChange}
                        />
                        <TimeFormTextBody>Manhã</TimeFormTextBody>
                    </SubLineForm>
                    <TimeFormTextBody>06:00 às 12:00</TimeFormTextBody>
                </Line1Form>
                <Line1Form>
                    <SubLineForm>
                        <ItemForm
                            type='radio'
                            id="timeFilterT"
                            name="timeFilter"
                            value="T"
                            checked={formData.timeFilter === 'T'}
                            onChange={handleChange}
                        />
                        <TimeFormTextBody>Tarde</TimeFormTextBody>
                    </SubLineForm>
                    <TimeFormTextBody>12:01 às 18:00</TimeFormTextBody>
                </Line1Form>
                <Line1Form>
                    <SubLineForm>
                        <ItemForm
                            type='radio'
                            id="timeFilterN"
                            name="timeFilter"
                            value="N"
                            checked={formData.timeFilter === 'N'}
                            onChange={handleChange}
                        />
                        <TimeFormTextBody>Noite</TimeFormTextBody>
                    </SubLineForm>
                    <TimeFormTextBody>18:01 às 23:00</TimeFormTextBody>
                </Line1Form>
                <Line2Form>
                    <SubLineForm>
                        <FilterForm
                            type="checkbox"
                            name="closeFilter"
                            checked={formData.closeFilter}
                            onChange={handleChange}
                        />
                        <LabelForm>Exibir unidades fechadas</LabelForm>
                    </SubLineForm>
                    <SubLineForm>
                        <LabelForm>Resultados encontrados:</LabelForm>
                        <ResultNumberForm>{resultsFound}</ResultNumberForm>
                    </SubLineForm>
                </Line2Form>
                <ButtonsForm>
                    <SearchButtonForm type="submit" >ENCONTRAR UNIDADE</SearchButtonForm>
                    <ClearButtonForm type="button" onClick={handleClearForm}>LIMPAR</ClearButtonForm>
                </ButtonsForm>
            </Form>
            <Legend>
                <Area1Legend>
                    <LegendTextTitle>Máscara</LegendTextTitle>
                    <ContainerVariationLegend>
                        <Variation1Legend>
                            <IconLegend src={'./required-mask.png'} alt="IconLegend"></IconLegend>
                            <VariationLegendTextBody>Obrigatório</VariationLegendTextBody>
                        </Variation1Legend>
                        <Variation1Legend>
                            <IconLegend src={'./recommended-mask.png'} alt="IconLegend"></IconLegend>
                            <VariationLegendTextBody>Recomendado</VariationLegendTextBody>
                        </Variation1Legend>
                    </ContainerVariationLegend>
                </Area1Legend>
                <Area1Legend>
                    <LegendTextTitle>Toalha</LegendTextTitle>
                    <ContainerVariationLegend>
                        <Variation1Legend>
                            <IconLegend src={'./required-towel.png'} alt="IconLegend"></IconLegend>
                            <VariationLegendTextBody>Obrigatório</VariationLegendTextBody>
                        </Variation1Legend>
                        <Variation1Legend>
                            <IconLegend src={'./recommended-towel.png'} alt="IconLegend"></IconLegend>
                            <VariationLegendTextBody>Recomendado</VariationLegendTextBody>
                        </Variation1Legend>
                    </ContainerVariationLegend>
                </Area1Legend>
                <Area2Legend>
                    <LegendTextTitle>Bebedouro</LegendTextTitle>
                    <ContainerVariationLegend>
                        <Variation2Legend>
                            <IconLegend src={'./partial-fountain.png'} alt="IconLegend"></IconLegend>
                            <VariationLegendTextBody>Parcial</VariationLegendTextBody>
                        </Variation2Legend>
                        <Variation2Legend>
                            <IconLegend src={'./forbidden-fountain.png'} alt="IconLegend"></IconLegend>
                            <VariationLegendTextBody>Proibido</VariationLegendTextBody>
                        </Variation2Legend>
                    </ContainerVariationLegend>
                </Area2Legend>
                <Area1Legend>
                    <LegendTextTitle>Vestiários</LegendTextTitle>
                    <ContainerVariationLegend>
                        <Variation3Legend>
                            <IconLegend src={'./required-lockerroom.png'} alt="IconLegend"></IconLegend>
                            <VariationLegendTextBody>Liberado</VariationLegendTextBody>
                        </Variation3Legend>
                        <Variation3Legend>
                            <IconLegend src={'./partial-lockerroom.png'} alt="IconLegend"></IconLegend>
                            <VariationLegendTextBody>Parcial</VariationLegendTextBody>
                        </Variation3Legend>
                        <Variation3Legend>
                            <IconLegend src={'./forbidden-lockerroom.png'} alt="IconLegend"></IconLegend>
                            <VariationLegendTextBody>Proibido</VariationLegendTextBody>
                        </Variation3Legend>
                    </ContainerVariationLegend>
                </Area1Legend>
            </Legend>
            <div>

            </div>
            <Footer />
        </>
    )
}

export default Home