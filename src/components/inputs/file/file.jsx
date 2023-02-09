import React from "react"
import { StyledInputFile } from "./styled"

export const InputFile = ({accept, required, onChange, name})=>{
    return(
        <StyledInputFile>
            <input type="file" onChange={onChange} accept={accept} required={required} name={name}/>
        </StyledInputFile>
    )
}