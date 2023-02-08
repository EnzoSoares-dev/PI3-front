import React from "react"
import { redirect } from "react-router-dom"
import { client } from "../../service/comunication"
import { Header } from "../header"
import { StyledForm } from "../../components/form/styled"
import { InputText } from "../../components/inputs/text/text"
import { Primary } from "../../components/buttons/primary/primary"
import { useState } from "react"

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user,
             [name]: value })
    }

    const handleSubmit = async() => {
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
                <InputText type={'text'} placeholder={'Email'} name={'email'} onChange={handleChange}/>
                <InputText type={'password'} placeholder={'Password'} name={'password'} onChange={handleChange}/>
                <br/>
                <Primary label={'Enviar'} onClick={handleSubmit}/>
            </StyledForm>
        </div>
    )    
}