import React from "react"
import { StyledPrimary } from "./styled"
export const Primary = ({onClick,label, disabled=false})=>{
    return(
        <StyledPrimary onClick={onClick} disabled={disabled}>
            {label}
        </StyledPrimary>
    )
}