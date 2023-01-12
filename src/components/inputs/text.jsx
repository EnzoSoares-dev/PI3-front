import React from "react"

export const Input = ({type, required, placeholder, })=>{
    return(
        <input
        className='
        h-10
        text-slate-600
        focus: border-none
        cursor-pointer
        rounded-md
        '
        type={type} 
        required={required} 
        placeholder={placeholder}/>
    )
}