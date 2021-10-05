import Exibir from './Exibir';
import conteudo from './Conteudo.module.css'
import Card from '../UI/Card'
const Conteudo = (props) => {
    if (props.editor !== false) {
        return (
            <Card className={conteudo.Editor}>{props.editor}</Card>
        )
    } else {
        return(
            <Card className={conteudo.Conteudo}>
                <header>
                    <h1>Conteudo</h1>
                </header>
                <Exibir dados={props.dados}></Exibir>
            </Card>
        )
    }
}

export default Conteudo;