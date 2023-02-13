import React from "react"
import { client } from "../../service/comunication"
import { decodeToken } from "react-jwt"
import { FlexDiv } from "../../components/div/flex"
import { InputText } from "../../components/inputs/text/text"
import { InputFile } from '../../components/inputs/file/file'
import { StyledForm } from "../../components/form/styled"
import { Primary } from "../../components/buttons/primary/primary"
import { useState } from "react"
import { Header } from "../header"
import { useNavigate } from "react-router-dom"

export const Process = () => {
    const navigate = useNavigate()
    const [process, setProcess] = useState({

    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setProcess({
            ...process,
            [name]:value
        })
    }
    const handleSubmit = async ()=>{
        const token = decodeToken(sessionStorage.getItem('token'))
        console.log(token.id)
        const algo = await client.post(`/processo/create/${token.id}`,process)
        .then((res)=>{
            navigate('/process/list')
        })
    }

    return(
        <div>
        <Header/>
        <br/>
        <FlexDiv>
        <StyledForm>
            <br/>
            <InputText type={'text'} placeholder={'Nome'} name={'name'} onChange={handleChange}/>
            <InputText type={'text'} placeholder={'Description'} name={'description'} onChange={handleChange}/>
            <InputText type={'number'} placeholder={'Etapas'} name={'steps'} onChange={handleChange}/>
            <InputText type={'date'}name={'start_date'} onChange={handleChange}/>
            <InputText type={'date'} name={'end_date'} onChange={handleChange}/>
            <br/>
            <Primary label={'Enviar'} onClick={handleSubmit}/>
        </StyledForm>
        </FlexDiv>
        </div>
    )
}