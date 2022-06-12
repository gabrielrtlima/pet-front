import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 2%;
    input {
        width: 20rem;
        margin-bottom: 0.5rem;
    }
    a {
        font-family: "Montserrat";
        font-size: 14px;
        font-weight: 500;
    }
    h1 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 1rem;
    }
    h2 {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size 18px;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }
    label {
        font-family: 'Montserrat';
        font-size: 14px;
        padding-bottom: 0.2rem;
    }
`

export const AlturaSexo = styled.div`
    display: flex;
    justify-content: space-between;
    input {
        padding: 0;
    }
`

export const Altura = styled.div`
    input{
        width: 9rem;
        margin-right: 2rem;
        padding: 0.3rem;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
    }
`

export const Sexo = styled.div`
    input{
        width: 9rem;
        padding: 0.3rem;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
    }
`

export const PesoInicial = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 9rem;
        padding: 0.3rem;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
    }
`

export const PesoData = styled.div`
    display: flex;
    padding: 0;
`

export const PesoDesejado = styled.div`
    display: flex;
    flex-direction: column;
    input{
        width: 9rem;
        margin-right: 2rem;
        padding: 0.3rem;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
    }
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 9rem;
        padding: 0.3rem;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
    }
`

export const BotaoFinalizar = styled.div`
    margin-top: 2%;
    button {
        margin-right: 1rem;
    }
`

export const Input = styled.input`
    padding: 0.3rem;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
`