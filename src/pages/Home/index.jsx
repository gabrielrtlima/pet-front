import { DescSistema } from "../../components/DescSistema";
import { FormDados } from "../../components/FormDados/";
import { Body, Container } from "./style";

export const Home = () => {
    return(
        <Body>
            <Container>
                <DescSistema text={true}/>
                <FormDados/>
            </Container>
        </Body>
    )
}