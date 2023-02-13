import React from "react"
import { TccModal } from "../components/modal/tccModal"
import { client } from "../service/comunication"
import { decodeToken } from "react-jwt"
import { useState, useEffect } from "react"
import { Header } from "./header"
import { StyledForm } from "../components/form/styled"
import { FlexDiv } from "../components/div/flex"
import { Primary } from "../components/buttons/primary/primary"
import { Link } from "react-router-dom"


  export const ListProcess = () => {
    const [procesess,setProcesess] = useState([])

    const handleDate = (date)=>{
        const data = new Date(date)
        const dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
        return dataFormatada
    }

    const token = decodeToken(sessionStorage.getItem('token'))
    useEffect(()=>{
        client.get(`/processo/${token.id}`)
        .then((res)=>{
            setProcesess(res.data)
        })
    },[])

    return(
        <div>
        <Header/>
        <br/>
        <Primary label={<Link to={'/process'}>Adicionar Processo</Link>}/>
        <FlexDiv>
        <br/>
        {procesess.map((process)=>{
            return(
            <StyledForm key={process.id}>
            <p>Processo: {process.name}</p>
            <p>Etapas: {process.steps}</p>
            <p>Último dia: {handleDate(process.end_date)}</p>
            <TccModal idProcesso={process.id}/>
            </StyledForm>
            )
        })}
        </FlexDiv>
        </div>
    )
}