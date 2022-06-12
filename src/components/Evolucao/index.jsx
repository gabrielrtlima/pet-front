import styled from 'styled-components'
import {Barras, Body, Container, Feito, Progresso} from './style'

export const Evolucao = (props) => {
    return (
        <Body>
            <Container>
                <h1>Evolução</h1>
                <Barras>
                    <h2>Progresso</h2>
                    <Progresso>
                        <div className="feito" style={{width: props.usuario.progresso+'%'}}>
                            {props.usuario.progresso}%
                        </div>
                    </Progresso>
                    <h2>Tempo</h2>
                    <Progresso>
                        <div className="feito" style={{width: props.usuario.tempo+'%', background: '#68C6E4'}}>
                            {props.usuario.tempo}%
                        </div>
                    </Progresso>
                </Barras>
            </Container>
        </Body>
    )
}