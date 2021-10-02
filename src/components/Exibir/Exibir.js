import React from "react";
import Wrapper from "../helpers/Wrapper";
import "./Exibir.css"
import ExibirItem from "./ExibirItems";
function Exibir(props) {

    return(
        <Wrapper>
            <div className="Exibir">
                {props.dados.map((dado) =>  (
                    <ExibirItem
                        key={dado.id}
                        titulo={dado.titulo}
                        conteudo={dado.conteudo}
                    />
                ))}
            </div>
        </Wrapper>
    );
}

export default Exibir;