import React from "react"
import { client } from "../service/comunication"
import { HeaderDiv } from "../components/div/head"
import { Link } from "react-router-dom"
import { decodeToken } from "react-jwt"
import Dropdown from "react-dropdown"

export const Header = ()=>{

    const logout = () => {
        sessionStorage.removeItem('token')
    }
    const token = decodeToken(sessionStorage.getItem('token')) || false
    if(token.role === 'empresa' && token !==null){
        return(
            <HeaderDiv>
                <Link to={'/'}>Home</Link>
                <Link onClick={logout} to={'/'}>Logout</Link>
                <Link to={'/process'}>Criar Processos</Link>
                <Link to={'/edit'}>Editar Perfil</Link>
                <Link to={'/process/list'}>Listar Processos</Link>
            </HeaderDiv>
        )
    }else{
        return(
            <HeaderDiv>
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </HeaderDiv>
        )
    }    
}