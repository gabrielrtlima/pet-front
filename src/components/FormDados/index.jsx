import { Altura, AlturaSexo, BotaoFinalizar, Data, Form, Input, PesoData, PesoDesejado, PesoInicial, Sexo } from './style'
import { DarkButton } from '../../components/Button'
import React, { useState } from 'react'
import axios from 'axios'

export const FormDados = (props) => {
    const url = process.env.REACT_APP_BASE_URL+'/usuario'
    const [formDados, setFormDados] = useState({
        nome: '',
        email: '',
        altura: '',
        sexo: '',
        pesoInicial: 0,
        pesoDesejado: 0,
        dataObjetivo: ''
    })

    const [infoUsuario, setInfoUsuario] = useState({})

    const handleNome = (e) => {
        setFormDados({
            ...formDados,
            nome: e.target.value
        })
    }

    const handleEmail = (e) => {
        setFormDados({
            ...formDados,
            email: e.target.value
        })
    }

    const handleAltura = (e) => {
        setFormDados({
            ...formDados,
            altura: e.target.value
        })
    }

    const handleSexo = (e) => {
        setFormDados({
            ...formDados,
            sexo: e.target.value
        })
    }

    const handlePesoInicial = (e) => {
        setFormDados({
            ...formDados,
            pesoInicial: e.target.value
        })
    }

    const handlePesoDesejado = (e) => {
        setFormDados({
            ...formDados,
            pesoDesejado: e.target.value
        })
    }

    const handleDataObjetivo = (e) => {
        setFormDados({
            ...formDados,
            dataObjetivo: e.target.value
        })
    }


    const submit = (e) => {
        e.preventDefault()
        axios.post(url, formDados).then(res => {
            console.log(res)
        }
        ).catch(err => {
            console.log(err.response.data)
        })
    }

    const updateUser = (e) => {
        e.preventDefault()
        axios.put(url, formDados).then(res => {
            console.log(res)
        }
        ).catch(err => {
            console.log(err.response.data)
        })
    }

    const getUser = () => {
        if(formDados.email !== ''){
            axios.get(url+'/buscar', {
                params: {
                    email: formDados.email
                }
            }).then(res => {
                console.log(res.data)
                setInfoUsuario(res.data)
            }).catch(err => {
                console.log(err.response.data)
                if(err.response.data.message === 'Usuario não encontrado'){
                    alert('Usuário não encontrado')
                }
            })
        }

    }

    return(
        <>
            <Form>
                {props.atualiza ? <h1>Atualize seus Dados!</h1> : <h1>Insira seus Dados!</h1>}
                <h2>Dados Pessoais</h2>
                <Input placeholder='Nome' onChange={handleNome} value={formDados.nome}/>
                <Input placeholder='Email' onChange={handleEmail} value={formDados.email}/>
                <AlturaSexo>
                    <Altura>
                        <Input type={'number'} placeholder='Altura (cm)' onChange={handleAltura} value={formDados.altura}/>
                    </Altura>
                    <Sexo>
                        <Input placeholder='Sexo' onChange={handleSexo} value={formDados.sexo}/>
                    </Sexo>
                </AlturaSexo>
                <h2>Metas</h2>
                <PesoInicial>
                    <label>Peso inicial/atual</label>
                    <Input type={'number'} onChange={handlePesoInicial} value={formDados.pesoInicial}/>
                </PesoInicial>
                <PesoData>
                    <PesoDesejado>
                        <label>Peso desejado</label>
                        <input type={'number'} onChange={handlePesoDesejado} value={formDados.pesoDesejado}/>
                    </PesoDesejado>
                    <Data>
                        <label>Data</label>
                        <Input type="date" onChange={handleDataObjetivo} value={formDados.dataObjetivo}/>
                    </Data>
                </PesoData>
                <BotaoFinalizar>
                    {props.atualiza ? <DarkButton texto="Atualizar" onClick={updateUser}/> : <DarkButton texto="Finalizar" onClick={submit}/> }
                    {!props.atualiza && <a>Já inseriu seus dados? Clique aqui!</a>}
                </BotaoFinalizar>
            </Form>
        </>
    )
}