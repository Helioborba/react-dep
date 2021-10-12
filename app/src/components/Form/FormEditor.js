import React,{useState,useRef} from 'react';
import ErrorModal from '../Errors/ErrorModal';
import Card from '../UI/Card'
import Button from '../UI/Button';
import estilo from './FormEditor.module.css'
const FormEditor = (props) => {

    const useInputMensagem = useRef();
    // const [mensagem,setMensagem] = useState("");
    const [error,setLogError] = useState("");

    const formSubmitHandler = (event) => {
        const mensagem = useInputMensagem.current.value;
        event.preventDefault(); // ESSA LINHA SEMPRE TEM QUE SER A PRIMEIRA, SENAO NADA VAI RODAR E A PAGINA RECARREGA
        if (mensagem.trim().length === 0) { // checar se e valido o valor recebido
            setLogError(
                { 
                  titulo: "Dados Inválidos",
                  mensagem: "Nada foi digitado! Por favor insira o texto novamente." 
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
        
        // Improviso enquanto os dados não sao mandados via api
        props.setConteudoAtual(prep);

        // Impoviso para a exibição do form, no caso, quando o form estiver aberto e for mudar para outro componente
        props.setEditorMode(false);
        useInputMensagem.current.value = '';
    }

    // Useref mudou a necessidade dessa parte
    // const mensagemHandler = (event) => {
    //     setMensagem(event.target.value);
    // }

    const errorHandler = (event) => {
        setLogError(false);
    }
    
    return(
        <Card className={estilo.Editor}>
            {error && <ErrorModal dados={error} onClick={errorHandler}></ErrorModal>}
            <form onSubmit={formSubmitHandler}>
                <label>Olá, digite uma mensagem abaixo:</label>
                <textarea spellCheck="false" type='text' ref={useInputMensagem}></textarea>
                <Button type="submit">Enviar</Button>
            </form>
        </Card>
    );
}

export default FormEditor;