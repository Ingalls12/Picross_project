import React, { useContext,useEffect,useState } from "react";
import { poinstContext } from "./context/pointsContext";
import "../styles/Puntuacion-Style.css";

export default function Puntuacion(){
    
    const state = useContext(poinstContext);
    const dispatch = state.setPuntaje;
    const valor = state.puntaje;
    const [corazones,setCorazones] = useState([1,1,1]);
    console.log(state);
    const vidas = corazones.map((e,i)=>{
        return(
            <span key = {i}><img className="corazon" src="/img/corazon.png"/></span>
        )
    });
    useEffect(()=>{
        if(valor.vidas===3&&valor.puntos===0){
           setCorazones([1,1,1])
        }else{
            setCorazones(corazones.slice(-3,-1))
        }
       
       
    },[valor.vidas])
 
    return(
        <div className="puntuacion">
            <div>Puntos: {valor.puntos}</div>
            <div className="puntuacion">Vidas: {vidas} </div>
        </div>
    )
}