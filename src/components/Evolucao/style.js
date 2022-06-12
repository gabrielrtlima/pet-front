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
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Work Sans';
        padding: 1rem;
    }
`

export const Barras = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    h2 {
        padding-bottom: 0.4rem;
    }
`

export const Progresso = styled.div`
    display: flex;
    width: 80%;
    background-color: #C4C4C4;
    border-radius: 15px;
    height: 1rem;
    margin-bottom: 1rem;
    .feito {
        display: flex;
        justify-content: center;
        height: 1rem;
        border-radius: 15px;
        background-color: #6AE468;
    }
`

