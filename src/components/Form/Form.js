import React,{useState} from 'react';

function Form() {
    const [titulo,atualizarTitulo] = useState("nada ainda...");
    const [mensagem,atualizarMensagem] = useState("");


    function onClickFire(event) {
        event.preventDefault();
        atualizarTitulo(mensagem);
    }
    
    const mensagemHandler = (event) => {
        atualizarMensagem(event.target.value)
    }
    return(
        <form onSubmit={onClickFire} value="algo">
            <label>Olá, digite uma mensagem abaixo:</label>
            <input type='text' onChange={mensagemHandler}/>
            <button type="submit">Enviar</button>
            <h2>Última mensagem: {titulo}</h2>
        </form>
    );
}

export default Form;