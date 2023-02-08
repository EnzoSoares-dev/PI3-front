import React from "react"
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


    const handleChange = (e) => {
        const { name, value } = e.target
        setProcess({ ...process,
             [name]: value })
    }

    return(
        <div>
        <Header/>
        <br/>
        <FlexDiv>
        <StyledForm>
            <br/>
            <InputText type={'text'} placeholder={'Nome'} name={'nome'} onChange={handleChange}/>
            <InputText type={'text'} placeholder={'Description'} name={'description'} onChange={handleChange}/>
            <InputText type={'number'} placeholder={'Etapas'} name={'steps'} onChange={handleChange}/>
            <InputText type={'date'}name={'start_date'} onChange={handleChange}/>
            <InputText type={'date'} name={'end_date'} onChange={handleChange}/>
            <InputFile accept={'image/png, image/jpeg'}/>
            <br/>
            <Primary label={'Enviar'} onClick={''}/>
        </StyledForm>
        </FlexDiv>
        </div>
    )
}