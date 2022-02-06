import React, { useContext } from "react";
import { gameContext } from "../context/gameContext";
import { separacion,contador, transpuesta } from "../../funciones/getHelpers";
export default function HelperTop(){
    let numeros = useContext(gameContext);
    let n_separados = separacion(numeros);
    n_separados = transpuesta(n_separados);
    const helper_top = contador(n_separados);
    const helper_top_array =[];
    for (const key in helper_top) {
        helper_top_array.push(helper_top[key]);
    }
    const helper = helper_top_array.map((e,i)=>{
        let n = e.join("\n");
        return(
            <span key={i}>{n}</span>
        )
    })
    
    return(
        <div  className="div_top">
           {helper}
        </div>
    )
}