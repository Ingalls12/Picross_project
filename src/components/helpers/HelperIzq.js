import React,{useContext} from "react";
import { gameContext } from "../gameContext";
import { contador,separacion } from "../../funciones/getHelpers";
export default function HelperIzq(){
    const numeros = useContext(gameContext)
    let n_separados = separacion(numeros)
    const helper_izq = contador(n_separados)
    const helper_izq_array =[]
    for (const key in helper_izq) {
        helper_izq_array.push(helper_izq[key])
    }
    const helper = helper_izq_array.map(e=>{
      
        return(
            <span>{e}</span>
        )
    })
    return(
        <div className="div_izq">
            {helper}
        </div>
    )
}