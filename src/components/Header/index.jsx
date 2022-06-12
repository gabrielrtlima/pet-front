import { Link } from 'react-router-dom';
import { Navbar, Logo, Links } from './style';

export const Header = () => {
    return (
        <Navbar>
            <Logo>
                <img src='./logo.svg'/>
                <Link to="/">Controle de Peso</Link>
            </Logo>
            <Links>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to="/atualizar-dados">Atualizar dados</Link>
            </Links>
        </Navbar>
    )
}