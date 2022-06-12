import { Form, BotaoCadastro } from './style';
import { DarkButton } from '../Button';

export const FormLogin = () => {
    return(
        <Form>
            <h1>Acessar meus dados</h1>
            <h2>Qual seu email?</h2>
            <input type="text" placeholder="Email" />
            <BotaoCadastro>
                <DarkButton texto="Acessar" />
                <a>Não inseriu seus dados? Clique aqui!</a>
            </BotaoCadastro>
        </Form>
    )
}