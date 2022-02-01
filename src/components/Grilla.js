import React,{useState} from "react";
import Plantilla from "./Plantilla";
import "../styles/Grilla-Style.css"
export default function Grilla(){
    const[mostrar,setMostrar]= useState(true);
    function render(){
        setMostrar(prev=>!prev)
       
    }
    return(
        <>
            <div className="centro">
            {mostrar?<Plantilla key={"a"}/>:<Plantilla key={"b"}/>}
            
            </div>
            <button onClick={render}>Borrar</button>
        </>
    )
}