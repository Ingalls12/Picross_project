import React, { useReducer,useState } from "react";
import { puntacionReducer } from "../reducers/puntuacionReducer";
export default function Puntuacion(){
    const [state, dispatchState] = useReducer(puntacionReducer, puntacionReducer())
    return(
        <>
            <div>Puntos: {state.puntos}</div>
            <div>Vidas: {state.vidas}</div>
        </>
    )
}