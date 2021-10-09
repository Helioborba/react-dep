import Card from "../UI/Card";
import Button from "../UI/Button";
import estilos from "./ErrorModal.module.css"
import Wrapper from "../helpers/Wrapper";
const ErrorModal = (props) => {
    return(
        // A primeira div é o backgrop, precisa de onclick também para ser escondida depois.
        <Wrapper>
            <div className={estilos.backdrop} onClick={props.onClick}/>
            <Card className={estilos.modal}>
                <header className={estilos.header}>
                    <h2>{props.dados.titulo}</h2>
                </header>
                <div className={estilos.conteudo}>
                    <p>{props.dados.mensagem}</p>
                </div>
                <footer className={estilos.eventos}>
                    <Button onClick={props.onClick}>Entendi</Button>
                </footer>
            </Card>
        </Wrapper>
    )
}

export default ErrorModal;