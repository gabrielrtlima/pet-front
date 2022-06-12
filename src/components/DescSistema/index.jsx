import { Container } from "./style";

export const DescSistema = (props) => {
    return(
        <Container>
            <img src="./ilustracao.svg"/>
            {props.text && 
                <p>
                    Tenha o controle do seu peso, 
                    alcance suas metas e fique por dentro do que acontece com o 
                    seu corpo através do <span>“Controle seu Peso”.</span>
                </p> 
            }
        </Container>
    )
}