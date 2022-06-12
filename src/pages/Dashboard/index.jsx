import { Evolucao } from "../../components/Evolucao"
import { IMC } from "../../components/IMC"
import { Monitoramento } from "../../components/Monitoramento"
import { Comparativo } from "../../components/Comparativo"
import { Historico } from "../../components/Historico"

const usuario = {
    pesoInicial: 45,
    dataInicial: '31/12/2019',
    pesoDesejado: 60,
    dataDesejada: '31/12/2020',
    progresso: 50,
    tempo: 70,
    pesos: [
        {
            peso: 47,
            data: '01/01/2020'
        },
        {
            peso: 48,
            data: '02/01/2020'
        },
        {
            peso: 49,
            data: '03/01/2020'
        }
    ]
}


export const Dashboard = (props) => {
    return(
        <>
            <Monitoramento usuario={usuario} />
            <Evolucao usuario={usuario} />
            <IMC />
            <Comparativo />
            <Historico />
        </>
    )
}