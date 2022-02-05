import React, { useReducer } from "react";
import { puntacionReducer } from "../reducers/puntuacionReducer";
export default function Puntuacion(){
    const [puntuacion, puntacionDispatcher] = useReducer(puntacionReducer,puntacionReducer());
    return(
        <>
            <div>Puntos: {puntuacion.puntos}</div>
            <div>Vidas: {puntuacion.vidas}</div>
        </>
    )
}