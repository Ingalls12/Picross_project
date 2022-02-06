import React from "react";
import "../styles/Instrucciones-Style.css"
export default function Instrucciones(){
    return(
        <div className="instrucciones">
            Instrucciones
            <div className="insc_clk_izq">
                <span><img alt = "left_click" className="img-instruccion" src="/img/left_click.png"/></span>
                <span><img alt = "cuadrado" className="img-instruccion" src="/img/square.png"/></span>
            </div>
            <div className="insc_clk_drc">
                <span><img alt = "rigth_click" className="img-instruccion " src="/img/right_click.png"/></span>
                <span><img alt = "X" className="img-instruccion " src="/img/x-mark.png"/></span>
            </div>
        </div>
    )

}