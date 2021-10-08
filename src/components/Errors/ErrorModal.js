import Card from "../UI/Card";
import Button from "../UI/Button";
import estilos from "./ErrorModal.module.css"
const ErrorModel = (props) => {
    return(
        <Card className={estilos.modal}>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
                <Button></Button>
            </footer>
        </Card>
    )
}

export default ErrorModel;