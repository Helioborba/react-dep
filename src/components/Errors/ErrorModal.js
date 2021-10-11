import React,{Fragment} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import estilos from "./ErrorModal.module.css"
import ReactDOM from "react-dom";

const BackDrop = (props) => {
    return(
        <div className={estilos.backdrop} onClick={props.onClick}/>
    );
}

const Overlay = (props) => {
    return(
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
    );
}
const ErrorModal = (props) => {
    return(
        // A primeira div é o backDrop, precisa de onclick também para ser escondida depois.
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Overlay dados={props.dados} onClick={props.onClick}/>, document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErrorModal;