import { TextTitle, TextBody, LegendTextTitle, VariationLegendTextBody, FooterTextBody } from "./style"
import { Header, TopHeader, LogoHeader, BottomHeader, BottomHeaderSpacer } from "./style"
import { Legend, Area1Legend, Area2Legend, ContainerVariationLegend, Variation1Legend, Variation2Legend, Variation3Legend, IconLegend } from "./style"
import { Footer, LogoFooter } from "./style"

function Home() {
    return (
        <>
            <Header>
                <TopHeader>
                    <LogoHeader src={'./logo.svg'} alt="logo"/>
                </TopHeader>
                <BottomHeader>
                    <TextTitle>REABERTURA <br/ > SMART FIT</TextTitle>
                    <BottomHeaderSpacer></BottomHeaderSpacer>
                    <TextBody>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</TextBody>
                </BottomHeader>
            </Header>
            <form>

            </form>
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
            <Footer>
                <LogoFooter src={'./logo.svg'} alt="logo"/>
                <FooterTextBody>Todos os direitos reservados - 2020</FooterTextBody>
            </Footer>
        </>
    )
}

export default Home