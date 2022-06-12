import {Body, Container} from "./style"
import { DescSistema } from "../../components/DescSistema"
import { FormDados } from "../../components/FormDados"

export const AtualizarDados = () => {
    return(
        <Body>
            <Container>
                <DescSistema />
                <FormDados atualiza={true} />
            </Container>
        </Body>
    )
}