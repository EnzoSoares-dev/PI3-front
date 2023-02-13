import React from "react"
import { client } from "../../service/comunication"
import { Primary } from "../../components/buttons/primary/primary"
import { Delete } from "../../components/buttons/delete/delete"
import { StyledForm } from "../../components/form/styled"
import { InputText } from "../../components/inputs/text/text"
import { Header } from "../header"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { decodeToken } from "react-jwt"

export const Edit = () => {
    const token = decodeToken(sessionStorage.getItem('token')) 
    const navigate = useNavigate()
    const [user, setUser] = useState([])

    const deleteEmpresa = async()=>{
        alert('alou')
        await client.delete(`/empresa/delete/${token.id}`)
        .then((res)=>{
            alert('Perfil deletado com sucesso')
            sessionStorage.removeItem('token')
            navigate('/')
        })
        .catch((err)=>{
            alert(err)
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        const updateUser = [
            ...user,
            {
                type: name,
                content: value
            }
        ]
        setUser(updateUser)      
    }
    const handleArray = () => {
        console.log(user)
    }
    const handleSubmit = async() => {       
        handleArray()        
        await client.put(`/empresa/update/${token.id}`,user)
        .then((res) => {
                alert('Perfil atualizado com sucesso')
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
            <InputText type={'text'} placeholder={'Nome'} name={'name'} onFocusOut={handleChange}/>
            <InputText type={'text'} placeholder={'Email'} name={'email'} onFocusOut={handleChange}/>
            <InputText type={'text'} placeholder={'CNPJ'} name={'CNPJ'} onFocusOut={handleChange}/>
            <InputText type={'password'} placeholder={'Password'} name={'password'} onFocusOut={handleChange}/>
            <br/>
            <Primary label={'Enviar'} onClick={handleSubmit}/>
            <Delete label={'Deletar'} onClick={deleteEmpresa}/>
        </StyledForm>
        </div>
    )
}