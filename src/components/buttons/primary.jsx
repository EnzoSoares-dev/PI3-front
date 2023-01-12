import React from "react"
export const Primary = ({onClick,label})=>{
    return(
        <button className='
        h-10 w-20
        rounded-md
        bg-indigo-600
        hover:bg-indigo-400 transition-colors
        hover:border-r hover:border-b border-gray-700' 
        onClick={onClick}
        >
        {label}
        </button>
    )
}