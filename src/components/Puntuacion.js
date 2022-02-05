import React, { useContext, useReducer,useState } from "react";
import { puntacionReducer } from "../reducers/puntuacionReducer";
import { poinstContext } from "./context/pointsContext";
export default function Puntuacion(){
    const state = useContext(poinstContext);
    const valor = state.puntaje;
    
    return(
        <>
            <div>Puntos: {valor.puntos}</div>
            <div>Vidas: {valor.vidas}</div>
        </>
    )
}