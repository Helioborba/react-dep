import React,{useState} from 'react';

function Form() {
    const [titulo,atualizarTitulo] = useState("nada ainda...");

    function onClickFire(event) {
        atualizarTitulo(event);
    }
    
    return(
        <div>
            <form>
                <h1>Olá, digite uma mensagem abaixo:</h1>
                <button onClick={onClickFire()} value="algo">Enviar</button>
                <h2>Última mensagem: {titulo}</h2>
            </form>
        </div>
    );
}

export default Form