import React from "react"
export const Secondary = ({onClick,label})=>{
    return(
        <button className='
        h-10 w-20
        rounded-md 
        bg-slate-500
        hover:bg-slate-300 transition-colors
        hover:border-r hover:border-b border-gray-700' 
        onClick={onClick}
        >
        {label}
        </button>
    )
}