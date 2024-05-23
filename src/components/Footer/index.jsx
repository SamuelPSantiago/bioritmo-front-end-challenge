import { MyFooter, Logo, TextBody } from "./style"

function Footer() {
    return (
        <MyFooter>
            <Logo src={'./logo.svg'} alt="logo" />
            <TextBody>Todos os direitos reservados - 2020</TextBody>
        </MyFooter>
    )
}

export default Footer