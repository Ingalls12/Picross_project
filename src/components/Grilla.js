import React,{useState, useContext} from "react";
import Plantilla from "./Plantilla";
import HelperIzq from "./helpers/HelperIzq"
import HelperTop from "./helpers/HelperTop";
import "../styles/Grilla-Style.css"
import { gameContext } from "./gameContext";
export default function Grilla(){
    const[mostrar,setMostrar]= useState(true);
    const [juego, setJuego] = useState("Hola");
    function render(){
        setMostrar(prev=>!prev)
       
    }
    const lista = [ 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1];
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