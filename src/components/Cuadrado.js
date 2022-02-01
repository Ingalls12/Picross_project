import React,{useState} from 'react';
import "../styles/Cuadrado-Style.css"
export default function Cuadrado(props){
    const[valor, setValor] =  useState("")
    const[activo,setActivo] = useState(false)
    function handleChange(e){
        
        if(valor==="X"){
            handleRigthChange(e)
        }else{
            setActivo(prev=>!prev)
            activo ? e.target.style.backgroundColor = "white":e.target.style.backgroundColor = "#372937";
            activo ? e.target.style.color = "#372937":e.target.style.color = "white";
        }
        
    }
    function handleRigthChange(e){
        e.preventDefault();
        if(activo){
            handleChange(e)
        }else{
            valor===""?setValor("X"):setValor("");
        }
        
       
    }
    return(
        <div className='cuadrado' onClick={handleChange} onContextMenu={handleRigthChange}>
            <p>{valor}</p>
        </div>
    )
}