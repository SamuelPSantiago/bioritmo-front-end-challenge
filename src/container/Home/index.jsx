import Footer from '../../components/Footer'
import TopLogo from '../../components/TopLogo'

import { TextTitle, HeaderFormTextTitle, QuestionFormTextTitle, LegendTextTitle, TextBody, TimeFormTextBody, VariationLegendTextBody } from "./style"
import { Header, BottomHeader, BottomHeaderSpacer } from "./style"
import { Form, HeaderForm, IconHeaderForm, QuestionForm, ItemForm, Line1Form, Line2Form, SubLineForm, FilterForm, LabelForm, ResultNumberForm, ButtonsForm, SearchButtonForm, ClearButtonForm } from './style'
import { Legend, Area1Legend, Area2Legend, ContainerVariationLegend, Variation1Legend, Variation2Legend, Variation3Legend, IconLegend } from "./style"

function Home() {
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
            <Form>
                <HeaderForm>
                    <IconHeaderForm src={'./icon-hour.png'} alt="IconTimeForm" />
                    <HeaderFormTextTitle>Horário</HeaderFormTextTitle>
                </HeaderForm>
                <QuestionForm>
                    <QuestionFormTextTitle>Qual período quer treinar?</QuestionFormTextTitle>
                </QuestionForm>
                <Line1Form>
                    <SubLineForm>
                        <ItemForm type='radio' name="time"></ItemForm>
                        <TimeFormTextBody>Manhã</TimeFormTextBody>
                    </SubLineForm>
                    <TimeFormTextBody>06:00 às 12:00</TimeFormTextBody>
                </Line1Form>
                <Line1Form>
                    <SubLineForm>
                        <ItemForm type='radio' name="time"></ItemForm>
                        <TimeFormTextBody>Tarde</TimeFormTextBody>
                    </SubLineForm>
                    <TimeFormTextBody>12:01 às 18:00</TimeFormTextBody>
                </Line1Form>
                <Line1Form>
                    <SubLineForm>
                        <ItemForm type='radio' name="time"></ItemForm>
                        <TimeFormTextBody>Noite</TimeFormTextBody>
                    </SubLineForm>
                    <TimeFormTextBody>18:01 às 23:00</TimeFormTextBody>
                </Line1Form>
                <Line2Form>
                    <SubLineForm>
                        <FilterForm type="checkbox" if="oc"></FilterForm>
                        <LabelForm>Exibir unidades fechadas</LabelForm>
                    </SubLineForm>
                    <SubLineForm>
                        <LabelForm>Resultados encontrados:</LabelForm>
                        <ResultNumberForm>0</ResultNumberForm>
                    </SubLineForm>
                </Line2Form>
                <ButtonsForm>
                    <SearchButtonForm type="submit">ENCONTRAR UNIDADE</SearchButtonForm>
                    <ClearButtonForm>LIMPAR</ClearButtonForm>
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