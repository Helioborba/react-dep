import React from "react";
import Card from "../UI/Card";
import exibir from "./ExibirConteudo.module.css"
import ExibirItem from "./ExibirItems";
const Exibir = (props) => {

    return(
        <Card className={exibir.Exibir}>
            {props.dados.map((dado) =>  (
                <ExibirItem
                    key={dado.id}
                    titulo={dado.titulo}
                    conteudo={dado.conteudo}
                />
            ))}
        </Card>
    );
}

export default Exibir;