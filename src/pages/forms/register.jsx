import React from "react"
import { client } from "../../service/comunication"
import { Primary } from "../../components/buttons/primary/primary"
import { StyledForm } from "../../components/form/styled"
import { InputText } from "../../components/inputs/text/text"
import { Header } from "../header"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const navigate = useNavigate()
    const [disable, setDisable] = useState(true)
    const [user, setUser] = useState({
        name: '',
        email: '',
        CNPJ: '',
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
        await client.post('/empresa/register',user)
        .then((res) => {
                alert('algo')
                window.sessionStorage.setItem('token',res.data.token)
                navigate('/process')
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
            <InputText type={'text'} placeholder={'Nome'} name={'name'} onChange={handleChange}/>
            <InputText type={'text'} placeholder={'Email'} name={'email'} onChange={handleChange}/>
            <InputText type={'text'} placeholder={'CNPJ'} name={'CNPJ'} onChange={handleChange}/>
            <InputText type={'password'} placeholder={'Password'} name={'password'} onChange={handleChange}/>
            <InputText type={'password'} placeholder={'Confirm'} name={'confirm'} onChange={confirmPassword}/>
            <br/>
            <Primary label={'Enviar'} onClick={handleSubmit} disabled={disable}/>
        </StyledForm>
        </div>
    )
}