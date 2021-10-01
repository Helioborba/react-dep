import React from "react";
import "./Exibir.css"
import ExibirItem from "./ExibirItems";
function Exibir(props) {

    return(
        <div className="Exibir">
            {props.dados.map((dado) =>  (
                <ExibirItem
                    key={dado.id}
                    titulo={dado.titulo}
                    conteudo={dado.conteudo}
                />
            ))}
        </div>
    );
}

export default Exibir;