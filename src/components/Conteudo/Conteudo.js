import Exibir from './Exibir';
import conteudo from './Conteudo.module.css'
import Card from '../UI/Card'
const Conteudo = (props) => {

    return(
        <Card className={conteudo.Conteudo}>
            <header>
                <h1>Conteudo</h1>
            </header>
            <Exibir dados={props.dados}></Exibir>
        </Card>
    )
}

export default Conteudo;