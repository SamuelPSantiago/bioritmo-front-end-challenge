import { LogoBackground, Logo, Introduction, IntroductionSpacer, TextTitle, TextBody } from "./style"

function Home() {
    return (
        <>
            <header>
                <LogoBackground>
                    <Logo src={'./logo.svg'} alt="logo"/>
                </LogoBackground>
                <Introduction>
                    <TextTitle>REABERTURA <br/ > SMART FIT</TextTitle>
                    <IntroductionSpacer></IntroductionSpacer>
                    <TextBody>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</TextBody>
                </Introduction>
            </header>
            <form>

            </form>
            <div>

            </div>
            <div>

            </div>
            <footer>

            </footer>
        </>
    )
}

export default Home