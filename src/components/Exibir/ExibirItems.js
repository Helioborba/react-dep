import React from "react";
import "./ExibirItems.css"

function ExibirItem(props) {
    
    return(
        <div>
            <div>
                <p>{props.titulo} {props.conteudo}</p>
            </div>
        </div>
    );
}

export default ExibirItem;