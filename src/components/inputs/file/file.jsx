import React from "react"
import { StyledInputFile } from "./styled"

export const InputFile = ({accept, required})=>{
    return(
        <StyledInputFile>
            <input type="file"/>
        </StyledInputFile>
    )
}