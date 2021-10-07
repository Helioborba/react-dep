import React,{useState} from 'react';

const Form = (props) => {
    const [titulo,atualizarTitulo] = useState("nada ainda...");
    const [mensagem,atualizarMensagem] = useState("");


    const onClickFire = (event) => {
        event.preventDefault(); // ESSA LINHA SEMPRE TEM QUE SER A PRIMEIRA, SENAO NADA VAI RODAR E A PAGINA RECARREGA
        if (mensagem.trim().length === 0) {
            return;
        }
        // Improviso enquanto os dados não sao mandados via api
        const prep = [{
            key: 1,
            titulo:"",
            conteudo: mensagem
        }];
        
        // No momento nao serve para nada
        atualizarTitulo(mensagem);

        // Improviso enquanto os dados não sao mandados via api
        props.setConteudoAtual(prep);

        // Impoviso para a exibição do form, no caso, quando o form estiver aberto e for mudar para outro componente
        props.setEditorMode(false);
    }

    // No momento nao serve para nada
    const mensagemHandler = (event) => {
        atualizarMensagem(event.target.value);
    }

    return(
        <form onSubmit={onClickFire}>
            <label>Olá, digite uma mensagem abaixo:</label>
            <textarea spellCheck="false" type='text' onChange={mensagemHandler}></textarea>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form;