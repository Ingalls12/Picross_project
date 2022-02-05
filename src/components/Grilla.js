import React,{useState, useContext} from "react";
import Plantilla from "./Plantilla";
import HelperIzq from "./helpers/HelperIzq"
import HelperTop from "./helpers/HelperTop";
import {random_list} from "../funciones/getRandomArray"
import "../styles/Grilla-Style.css"
import { gameContext } from "./gameContext";
export default function Grilla(){
    const[mostrar,setMostrar]= useState(true);
    const [juego, setJuego] = useState("Hola");
    function render(){
        setMostrar(prev=>!prev)
       
    }
    const lista = random_list();
    return(
        <>
            <gameContext.Provider value={lista}>
                <div className="centro">
                    <div className="helper_izq" ><HelperIzq /></div>
                    <div className="grilla">{mostrar?<Plantilla key={"a"}/>:<Plantilla key={"b"}/>}</div>
                    <div className="helper_top"><HelperTop /></div>
                </div>
            </gameContext.Provider>
            <button onClick={render}>Borrar</button>
        </>
    )
}