import Card from "../UI/Card";
import menu from "./Menu.module.css"

const Menu = (props) => {
    return(
        <Card className={menu.Menu}>
            <button onClick={(event) => props.conteudoHandler("1")(event)}>
                <p>Menu</p>
            </button>
            <button onClick={(event) => props.conteudoHandler("2")(event)}>
                <p>Jogos antigos</p>
            </button>
            <button onClick={(event) => props.conteudoHandler("3")(event)}>
                <p>PS2 e outros</p>
            </button>
            <button onClick={(event) => props.conteudoHandler("4")(event)}>
                <p>SNES e outros</p>
            </button>
            <button onClick={props.editorHandler}>
                <p>Editor</p>
            </button>
        </Card>
    )
} 

export default Menu;