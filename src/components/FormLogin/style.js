import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
    }
    h2 {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 0.8rem;
    }
    input {
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        padding: 0.5rem;
        width: 50%;
        margin-bottom: 1.5rem;
    }
`

export const BotaoCadastro = styled.div`
    display: flex;
    align-items: center;
    button: {
        padding: 0;
    }
    a {
        margin-left: 0.5rem;
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 14px;
    }
`