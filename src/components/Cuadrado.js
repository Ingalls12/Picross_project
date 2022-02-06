import React,{useContext, useState} from 'react';
import "../styles/Cuadrado-Style.css";
import { poinstContext } from './context/pointsContext';
export default function Cuadrado(props){
    let fondo = "#567E7E"
    let color = "#131A1A";
    let error = "#83062C"
    const[valor, setValor] =  useState("");
    const[activo,setActivo] = useState(false);
    const state = useContext(poinstContext);
    const res = state.puntaje;
    const dispatcher = state.setPuntaje;

    function isCorrect(e){
        if(e.value===1){
            return true;
        }else{
            return false;
        }
       
    }
    function handleChange(e){
        let elemento = e.target;
        elemento.value = props.value;
        if(!activo){
            if(elemento.innerText==="X"){
                elemento.innerText = "";
            }else{
                setActivo(true);
                if(isCorrect(elemento)){
                    dispatcher({type:"POINT"});
                    elemento.style.backgroundColor = color;
                }else{
                    dispatcher({type:"ERROR"});
                    elemento.style.backgroundColor = error;
                }
            }
        }
    }
    function handleRigthChange(e){
        let elemento = e.target;
        e.preventDefault();
        elemento.value= props.value;
        if(!activo){
            if(isCorrect(elemento)){
                setActivo(true);
                dispatcher({type:"ERROR"});
                dispatcher({type:"POINT"});
                elemento.style.backgroundColor = color;
            }else{
                if(elemento.innerText==="X"){
                    elemento.innerText="";
                }else{
                    elemento.innerText = "X";
                }
            }
        }
    }
    return(
        <div className="cuadrado" onClick={handleChange} onContextMenu={handleRigthChange} value={props.value} >
            <p>{valor}</p>
        </div>
    )
}