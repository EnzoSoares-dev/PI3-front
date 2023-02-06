import React from "react"
import { StyledDelete } from "./styled"
export const Delete = ({onClick,label})=>{
    return(
        <StyledDelete onClick={onClick}>
            {label}
        </StyledDelete>
    )
}