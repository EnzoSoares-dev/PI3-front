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

export const Process = () => {
    const [process, setProcess] = useState({

    })
    const [item,setItem] = useState()
    const formData = new FormData()


    const handleChange = (e) => {
        const { name, value } = e.target
        formData.append(name, value)
    }
    const handleFile = (e) =>{
        const {name, value} = e.target
        console.log(e.dataTransfer)
        formData.append(name, e.dataTransfer.files[0])
        console.log(process)
    }
    const handleSubmit = async ()=>{
        formData.set('process', 'process')
        console.log('form: ',formData.get(process))
        console.log(process)
        alert('algo')
        const token = decodeToken(sessionStorage.getItem('token'))
        await client.post(`/processo/create/${token.id}`,{data:process,headers:{"Content-Type": "multipart/form-data" }})
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
            <InputFile accept={'image/png, image/jpeg'} name={'image'} onChange={handleFile}/>
            <br/>
            <Primary label={'Enviar'} onClick={handleSubmit}/>
        </StyledForm>
        <img src={item} alt="" />
        </FlexDiv>
        </div>
    )
}