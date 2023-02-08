import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { decodeToken } from "react-jwt"

export const IsAuth = ({type=['empresa'], component})=>{
    
    const role = sessionStorage.getItem('token')
    if(role){
        const token = decodeToken(role)
        if (localStorage.getItem('token') && type.includes(token.role)) {
            return component || <Outlet />
          }
    }
      return <Navigate to="/register"/>

}