import {ButtonDark, ButtonLight} from "./style";
import React from 'react'

export const LightButton = (props) => {
    return (
        <ButtonLight onClick={props.onClick}>
            <span>{props.texto}</span>
        </ButtonLight>
    )
}

export const DarkButton = (props) => {
    return (
        <ButtonDark onClick={props.onClick}>
            <span>{props.texto}</span>
        </ButtonDark>
    )
}
