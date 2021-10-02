import React from "react";
import Wrapper from "../helpers/Wrapper";
import "./ExibirItems.css"

function ExibirItem(props) {
    
    return(
        <Wrapper>
            <div>
                <p>{props.titulo} {props.conteudo}</p>
            </div>
        </Wrapper>   
    );
}

export default ExibirItem;