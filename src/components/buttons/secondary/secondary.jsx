import React from "react"
import { StyledSecondary } from "./styled"
export const Secondary = ({onClick,label})=>{
    return(
        <StyledSecondary onClick={onClick}>
            {label}
        </StyledSecondary>
    )
}