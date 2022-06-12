import { DarkButton } from "../Button"
import {AtualizarButton, AtualizarPeso, Body, Container, ContainerAtualizar, ImagemAtualizar, PesoAtual, PesoInicial, PesoMeta, Pesos} from "./style"

export const Monitoramento = (props) => {
    return(
        <Body>
            <Container>
                <h1>Monitoramento</h1>
                <Pesos>
                    <PesoInicial>
                        <h3>Peso Inicial</h3>
                        <h2>{props.usuario.pesoInicial} kg</h2>
                        <h4>{props.usuario.dataInicial}</h4>
                    </PesoInicial>
                    <PesoAtual>
                        <h3>Peso Atual</h3>
                        <h2>{props.usuario.pesos[2].peso} kg</h2>
                        <h4>{props.usuario.pesos[2].data}</h4>
                    </PesoAtual>
                    <PesoMeta>
                        <h3>Peso Desejado</h3>
                        <h2>{props.usuario.pesoDesejado} kg</h2>
                        <h4>{props.usuario.dataDesejada}</h4>
                    </PesoMeta>
                </Pesos>
                <AtualizarPeso>
                    <ImagemAtualizar>
                        <img src="./logo-preto.svg" />
                    </ImagemAtualizar>
                    <ContainerAtualizar>
                        <h1>Atualizar Peso</h1>
                        <p>Qual seu peso hoje?</p>
                        <AtualizarButton>
                            <input type="number" placeholder="Peso" />
                            <DarkButton texto="Atualizar" />
                        </AtualizarButton>
                    </ContainerAtualizar>
                </AtualizarPeso>
            </Container>
        </Body>
    )
}