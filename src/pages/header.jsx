import React from "react"
import { HeaderDiv } from "../components/div/head"
import { Link } from "react-router-dom"
import { decodeToken } from "react-jwt"

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
                <Link to={'/process'}>Processos</Link>
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