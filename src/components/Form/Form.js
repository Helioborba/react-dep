import React,{useState} from 'react';
import ErrorModal from '../Errors/ErrorModal';
import Wrapper from '../helpers/Wrapper'
import Button from '../UI/Button';
const Form = (props) => {
    const [titulo,atualizarTitulo] = useState("nada ainda...");
    const [mensagem,setMensagem] = useState("");
    const [error,setLogError] = useState("");

    const onClickFire = (event) => {
        event.preventDefault(); // ESSA LINHA SEMPRE TEM QUE SER A PRIMEIRA, SENAO NADA VAI RODAR E A PAGINA RECARREGA
        if (mensagem.trim().length === 0) {
            setLogError(
                { 
                  titulo: "Invalid Input",
                  mensagem: "No text was written!" 
                }
            )
            return;
        }

        // Improviso enquanto os dados não sao mandados via api
        const prep = [{
            id: 1,
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
        setMensagem(event.target.value);
    }

    return(
        <Wrapper>
            {error && <ErrorModal></ErrorModal>}
            <form onSubmit={onClickFire}>
                <label>Olá, digite uma mensagem abaixo:</label>
                <textarea spellCheck="false" type='text' onChange={mensagemHandler}></textarea>
                <Button type="submit">Enviar</Button>
            </form>
        </Wrapper>
    );
}

export default Form;