import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Register } from "../pages/forms/register"
import { Login } from "../pages/forms/login"
import { Process } from "../pages/forms/process"
import { IsAuth } from "../service/auth"
export const RouteApp = ()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home'/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='process/create' element={<IsAuth type={'empresa'} component={<Process/>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}