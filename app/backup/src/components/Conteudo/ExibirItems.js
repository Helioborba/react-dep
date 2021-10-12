import React from "react";
import Card from "../UI/Card";
import exibirItems from "./ExibirItems.module.css"

const ExibirItem = (props) => {
    
    return(
        <Card className={exibirItems.ExibirItems}>
            <p>{props.titulo} {props.conteudo}</p>
        </Card>   
    );
}

export default ExibirItem;