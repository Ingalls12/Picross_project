import React from "react";
import "../styles/Footer-Style.css";
export default function Footer(){
    return(
        <div className="footer">
            <pre>
                <p>Creado por Leonardo Ingalls</p> 
                <a href="https://github.com/Ingalls12" target={"_blank"} className="icono_git"><img className="img" src="/img/github.png"/></a> 
                <a href="https://twitter.com/fsundae55" target={"_blank"}className="icono_twi"><img className="img"src="/img/twitter.png"/></a>
            </pre>
        </div>
    )
}