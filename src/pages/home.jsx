import React from "react"
import { Primary } from "../components/buttons/primary"
import { Secondary } from "../components/buttons/secondary"
import { Delete } from "../components/buttons/delete/delete"
import { Input } from "../components/inputs/text"

export const Home = ()=>{
    const text = 'teste'
    const alertEvent = ()=>{
        alert('alo')
    }
    return(
        <div>
            <Primary onClick={alertEvent} label={text}/>
            <Secondary label={text}/>
            <Delete label={text}/>
            <Input required={false} placeholder={'texto'}></Input>
        </div>
    )
}