import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-bottom: 2rem;
    margin-top: 2rem;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Work Sans';
        padding: 1rem;
    }
`

export const Pesos = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 2rem;
`

export const PesoInicial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F3ED5E;
    border-radius: 50%;
    padding: 5%;
    h3 {
        padding-bottom: 0.5rem;
    }
    h2 {
        padding-bottom: 0.5rem;
        font-family: 'Work Sans';
        font-weight: 700;
        font-size: 32px;
    }
    h4 {
        font-family: 'Work Sans';
        font-weight: 700;
        font-size: 16px;
    }
`

export const PesoAtual = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #6AE468;
    border-radius: 50%;
    padding: 5%;
    h3 {
        padding-bottom: 0.5rem;
    }
    h2 {
        padding-bottom: 0.5rem;
        font-family: 'Work Sans';
        font-weight: 700;
        font-size: 32px;
    }
    h4 {
        font-family: 'Work Sans';
        font-weight: 700;
        font-size: 16px;
    }
`

export const PesoMeta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #68C6E4;
    border-radius: 50%;
    padding: 4%;
    h3 {
        padding-bottom: 0.5rem;
    }
    h2 {
        padding-bottom: 0.5rem;
        font-family: 'Work Sans';
        font-weight: 700;
        font-size: 32px;
    }
    h4 {
        font-family: 'Work Sans';
        font-weight: 700;
        font-size: 16px;
    }
`

export const AtualizarPeso = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 0.8rem;
    align-items: center;
`

export const ImagemAtualizar = styled.div``

export const ContainerAtualizar = styled.div`
    h1 {
        font-family: 'Montserrat';
        font-size: 24px;
    }
    p {
        font-family: 'Montserrat';
        padding: 0 0 1rem 1rem;
    }
`

export const AtualizarButton = styled.div`
    display: flex;
    padding: 0 0 1rem 1rem;
    input {
        margin-right: 1rem;
        width: 40%;
    }
`