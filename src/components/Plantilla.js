import React,{useContext} from "react";
import Cuadrado from "./Cuadrado";
import { gameContext } from "./context/gameContext";
import "../styles/Plantilla-Style.css"
export default function Plantilla(){
    const lista = useContext(gameContext);
    return <div className="grilla">{lista.map((e,i)=>{
        return(
            <Cuadrado key={i} numero ={i+1} value = {e} />
        )
        } )}</div>;
    }