import style from './Input.module.css'
const Input = (props) => {
    return(
        <div className={`${style.control} ${
            props.isValid === false ? style.invalid : ''
          }`}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
}

export default Input;