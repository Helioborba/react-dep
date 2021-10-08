import Estilo from './Button.module.css'
const Button = (props) => {
    return(
        <div className={Estilo.Estilo}>
            <button type={props.type}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;