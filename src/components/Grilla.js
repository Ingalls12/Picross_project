import React,{useContext, useEffect, useReducer, useState} from "react";
import Plantilla from "./Plantilla";
import HelperIzq from "./helpers/HelperIzq"
import HelperTop from "./helpers/HelperTop";
import "../styles/Grilla-Style.css"
import { gameContext } from "./context/gameContext";
import { listaReducer } from "../reducers/arrReducer";
import { poinstContext } from "./context/pointsContext";
import {countSquares} from "../funciones/getCountSquares";
export default function Grilla(){
    const[mostrar,setMostrar]= useState(true);
    const[ganaste, setGanaste] = useState(false);
    const[perdiste, setPerdiste] = useState(false);
    const state = useContext(poinstContext);
    const dispatcher = state.setPuntaje;
    const puntos = state.puntaje;
    const [array, arrayDispatcher] = useReducer(listaReducer,listaReducer())
    function new_Puzzle(){
        borrar()
        arrayDispatcher({type:"NEW"});
        dispatcher({type:"NEW_GAME"});
    }   
    useEffect(new_Puzzle,[])
    function borrar(){
        setGanaste(false);
        setPerdiste(false);
        setMostrar(prev=>!prev);
        dispatcher({type:"NEW_GAME"});
    }
    const puntosTotales = countSquares(array.list);
    
    useEffect(()=>{
        if(puntos.puntos === puntosTotales && puntos.vidas>0){
            setGanaste(true)
            console.log("Ganaste")
        }
        if(puntos.vidas<1&&puntos.puntos < puntosTotales){
            setPerdiste(true);
        }
    },[puntos.puntos,puntos.vidas])
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
            {ganaste ? <div className="ganaste_mensaje"> Felicidades haz ganado</div>:<></>}
            {perdiste ? <div className="perdiste_mensaje"> Haz perdido </div>:<></>}
        </>
    )
}