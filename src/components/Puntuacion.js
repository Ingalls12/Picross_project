import React, { useContext,useState } from "react";
import { poinstContext } from "./context/pointsContext";
import "../styles/Puntuacion-Style.css";

export default function Puntuacion(){
    
    const state = useContext(poinstContext);
    const valor = state.puntaje;
    let lifes = new Array(3);
    const vidas = lifes.forEach((e)=>{
        console.log("entro")
        return(
            <span><img className="corazon" src="/img/corazon.png"/></span>
        )
    })
 
    return(
        <div className="puntuacion">
            <div>Puntos: {valor.puntos}</div>
            <div className="puntuacion">Vidas: {vidas} </div>
        </div>
    )
}