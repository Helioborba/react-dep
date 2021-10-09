import Exibir from './ExibirConteudo';
import conteudo from './Conteudo.module.css'
import Card from '../UI/Card'
import Wrapper from '../helpers/Wrapper';
const Conteudo = (props) => {
    // Checa caso o form foi solicitado ou nao; deve haver uma forma melhor de fazer isto...

    if (props.editor !== false) {
        return (
            <Wrapper>{props.editor}</Wrapper>
        );
    } else {
        return(
            <Card className={conteudo.Conteudo}>
                <header>
                    <h1>Conteudo</h1>
                </header>
                <Exibir dados={props.dados}></Exibir>
            </Card>
        );
    }
}

export default Conteudo;