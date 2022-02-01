import React from "react";
import Cuadrado from "./Cuadrado";
import "../styles/Plantilla-Style.css"
export default function Plantilla(){
    const n = 100;
    
    return <div className="grilla">{[...Array(n)].map((e,i)=><Cuadrado key={i} numero ={i+1}/> )}</div>;
}