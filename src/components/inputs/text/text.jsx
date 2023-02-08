import React from "react"
import { StyledInputText } from "./styled"
import { FlexDiv } from "../../div/flex"
export const InputText = ({type, required, placeholder, label, name, onChange})=>{
    return(
        <FlexDiv>
            <label>{label}</label>
            <StyledInputText type={type} required={required} placeholder={placeholder} name={name} onChange={onChange}/>
        </FlexDiv>
    )
}