import React from "react"
export const Delete = ({onClick,label})=>{
    return(
        <button className='
        h-10 w-20
        rounded-md bg-red-600
        hover:bg-red-400 transition-colors
        hover:border-r hover:border-b border-gray-700' 
        onClick={onClick}
        >
        {label}
        </button>
    )
}