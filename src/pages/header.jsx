import React from "react"
import { HeaderDiv } from "../components/div/head"
import { Link } from "react-router-dom"


export const Header = ()=>{
    return(
        <HeaderDiv>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </HeaderDiv>
    )
}