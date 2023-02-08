import React from "react"
import { client } from "../../service/comunication"
import { Primary } from "../../components/buttons/primary/primary"
import { StyledForm } from "../../components/form/styled"
import { InputText } from "../../components/inputs/text/text"
import { Header } from "../header"
import { useState } from "react"
import { redirect } from "react-router-dom"

export const Register = () => {
    const [disable, setDisable] = useState(true)
    const [user, setUser] = useState({
        nome: '',
        email: '',
        cnpj: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user,
             [name]: value })
    }

    const confirmPassword = (e) => {
        const {value} = e.target
        user.password !== value
        ?setDisable(true)
        :setDisable(false)
    }

    const handleSubmit = async() => {
        console.log(user)
        await client.post('http://localhost:9000/empresa/register',user)
        .then((res) => {
                alert('algo')
                sessionStorage.setItem('token',res.data.token)
                redirect('/')
            })
            .catch((err)=>{
                alert(err)
            })
    }

    return(
        <div>
        <Header/>
        <br/>
        <StyledForm>
            <br/>
            <InputText type={'text'} placeholder={'Nome'} name={'nome'} onChange={handleChange}/>
            <InputText type={'text'} placeholder={'Email'} name={'email'} onChange={handleChange}/>
            <InputText type={'text'} placeholder={'CNPJ'} name={'cnpj'} onChange={handleChange}/>
            <InputText type={'password'} placeholder={'Password'} name={'password'} onChange={handleChange}/>
            <InputText type={'password'} placeholder={'Confirm'} name={'confirm'} onChange={confirmPassword}/>
            <br/>
            <Primary label={'Enviar'} onClick={handleSubmit} disabled={disable}/>
        </StyledForm>
        </div>
    )
}