import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Register } from "../pages/forms/register"
import { Login } from "../pages/forms/login"
import { Edit } from "../pages/forms/edit"
import { ListProcess } from "../pages/ListProcess"
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
                <Route path='/edit' element={<IsAuth type={'empresa'} component={<Edit/>}/>}/>
                <Route path='/process' element={<IsAuth type={'empresa'} component={<Process/>}/>}/>
                <Route path='/process/list' element={<IsAuth type={'empresa'}component={<ListProcess/>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}