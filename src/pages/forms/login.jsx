import React from "react"
import { useNavigate } from "react-router-dom"
import { client } from "../../service/comunication"
import { Header } from "../header"
import { StyledForm } from "../../components/form/styled"
import { InputText } from "../../components/inputs/text/text"
import { Primary } from "../../components/buttons/primary/primary"
import { useState } from "react"

export const Login = () => {
    const navigate = useNavigate()
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
        await client.post('/login',user)
        .then((res) => {
                window.sessionStorage.setItem('token',res.data.token)
                navigate('/process')
            })
            .catch((err)=>{
                alert('Essa conta não existe')
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