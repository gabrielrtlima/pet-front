import { DescSistema } from '../../components/DescSistema';
import { FormLogin } from '../../components/FormLogin';
import {Body, Container } from './style';

export const Login = () => {
    return(
        <Body>
            <Container>
                <DescSistema text={true}/>
                <FormLogin />
            </Container>
        </Body>
    )
}