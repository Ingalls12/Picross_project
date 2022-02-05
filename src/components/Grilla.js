import React,{useEffect, useReducer, useState} from "react";
import Plantilla from "./Plantilla";
import HelperIzq from "./helpers/HelperIzq"
import HelperTop from "./helpers/HelperTop";
import "../styles/Grilla-Style.css"
import { gameContext } from "./gameContext";
import { listaReducer } from "../reducers/arrReducer";
export default function Grilla(){
    const[mostrar,setMostrar]= useState(true);
   

    const [array, arrayDispatcher] = useReducer(listaReducer,listaReducer())
    function new_Puzzle(){
        borrar()
        arrayDispatcher({type:"NEW"})
    }
    useEffect(new_Puzzle,[])
    function borrar(){
        setMostrar(prev=>!prev)
    }

    return(
        <>
            <gameContext.Provider value={array.list}>
                <div className="centro">
                    <div className="helper_izq" ><HelperIzq /></div>
                    <div className="grilla">{mostrar?<Plantilla key={"a"} />:<Plantilla key={"b"} />} </div>
                    <div className="helper_top"><HelperTop /></div>
                </div>
            </gameContext.Provider>
            <button className="btn_borrar" onClick={borrar}>Borrar</button>
            <button className="btn_nuevo" onClick={new_Puzzle}>Nuevo Puzzle</button>
        </>
    )
}