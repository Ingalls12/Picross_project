import React,{useContext, useState} from 'react';
import "../styles/Cuadrado-Style.css";
import { poinstContext } from './context/pointsContext';
export default function Cuadrado(props){
    let color = "#131A1A";
    let error = "#83062C"
    const[valor, setValor] =  useState("");
    const[activo,setActivo] = useState(false);
    const state = useContext(poinstContext);
    const res = state.puntaje;
    const dispatcher = state.setPuntaje;
    
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
                if(!e.target.activado){
                    dispatcher({type:"POINT"})
                }
                e.target.activado = true;
            }
        }else{
            
            if(e.target.innerText==="X"){
                e.target.style.backgroundColor = color;
                e.target.innerText ="";
            }else{
                if(!(e.target.style.backgroundColor===error)){
                    e.target.style.backgroundColor = error;
                    e.target.activado = true;
                    dispatcher({type:"ERROR"});
                }else{
                    e.target.activado = true;
                }
                
            }
           
        }
     
        
    }
    function isCorrect(e){
        if(e.target.value===1){
            return true;
        }else{
            return false;
        }
       
    }
    function handleRigthChange(e){
        e.preventDefault();
        e.target.value= props.value
        if(!isCorrect(e)){
           if(!(e.target.style.backgroundColor===error)){
               
                if(activo){
                    handleChange(e)
                }else{
                    if(!e.target.activado){
                        valor===""?setValor("X"):setValor("");
                    }
                    
                }
           }
        }else if(e.target.activado){
        }else{
            dispatcher({type:"ERROR"});
            e.target.style.backgroundColor = color;
        }
        
        
       
    }
    return(
        <div className='cuadrado' onClick={handleChange} onContextMenu={handleRigthChange} value={props.value} >
            <p>{valor}</p>
        </div>
    )
}