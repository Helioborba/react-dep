import React,{useState} from 'react';

const Form = (props) => {
    const [titulo,atualizarTitulo] = useState("nada ainda...");
    const [mensagem,atualizarMensagem] = useState("");


    const onClickFire = (event) => {
        event.preventDefault();
        atualizarTitulo(mensagem);
    }
    
    const mensagemHandler = (event) => {
        atualizarMensagem(event.target.value)
    }
    return(
        <form onSubmit={onClickFire} value="algo">
            <label>Olá, digite uma mensagem abaixo:</label>
            <textarea spellcheck="false" type='text' onChange={mensagemHandler}></textarea>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form;