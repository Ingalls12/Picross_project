import React,{useReducer, useState} from 'react';
import "../styles/Cuadrado-Style.css"
import { puntacionReducer } from '../reducers/puntuacionReducer';
export default function Cuadrado(props){
    let color = "#FF9136"
    const[valor, setValor] =  useState("");
    const[activo,setActivo] = useState(false);

    const [puntaje, dispatchPuntaje] = useReducer(puntacionReducer,puntacionReducer())
    function handleChange(e){
        e.target.value= props.value;
        if(isCorrect(e)){
            if(valor==="X"){
                handleRigthChange(e)
    
            }else{
                setActivo(prev=>!prev)
                /* activo ? e.target.style.backgroundColor = "white":e.target.style.backgroundColor = color;
                activo ? e.target.style.color = "black":e.target.style.color = "white";
                activo ? e.target.value = props.numero:e.target.value= props.value; */
                e.target.style.backgroundColor = color;
                e.target.activado = true;
            }
        }else{
            
            if(e.target.innerText==="X"){
                e.target.style.backgroundColor = "white";
                e.target.innerText ="";
            }else{
                e.target.style.backgroundColor = "red";
                e.target.activado = false;
                dispatchPuntaje({type:"ERROR"})
            }
           
        }
     
        
    }
    function isCorrect(e){
        if(e.target.value===1){
            return true
        }else{
            return false
        }
       
    }
    function handleRigthChange(e){
        e.preventDefault();
        e.target.value= props.value
        if(!isCorrect(e)){
           if(e.target.style.backgroundColor!=="red"){
                if(activo){
                    handleChange(e)
                }else{
                    valor===""?setValor("X"):setValor("");
                }
           }
        }else{
            e.target.style.backgroundColor = color;
      
        }
        
        
       
    }
    return(
        <div className='cuadrado' onClick={handleChange} onContextMenu={handleRigthChange} value={props.value} >
            <p>{valor}</p>
        </div>
    )
}