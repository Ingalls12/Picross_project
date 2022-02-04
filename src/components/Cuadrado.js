import React,{useState} from 'react';
import "../styles/Cuadrado-Style.css"
export default function Cuadrado(props){
    let color = "#FF9136"
    const[valor, setValor] =  useState("")  
    const[activo,setActivo] = useState(false)
    function handleChange(e){
        e.target.value= props.value;
        if(isCorrect(e)){
            if(valor==="X"){
                handleRigthChange(e)
    
            }else{
                setActivo(prev=>!prev)
                activo ? e.target.style.backgroundColor = "white":e.target.style.backgroundColor = color;
                activo ? e.target.style.color = "black":e.target.style.color = "white";
                activo ? e.target.value = props.numero:e.target.value= props.value;
             
                
            }
        }else{
            e.target.style.backgroundColor = "red"
        }
        
        
    }
    function isCorrect(e){
        if(e.target.value==1){
            return true
        }else{
            return false
        }
       
    }
    function handleRigthChange(e){
        e.preventDefault();
        e.target.value= props.value
        if(!isCorrect(e)){
           if(e.target.style.backgroundColor!="red"){
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