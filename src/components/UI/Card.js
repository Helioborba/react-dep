import Wrapper from "../helpers/Wrapper";

const Card = (props) => {
    return (
        <Wrapper>
            <div className={props.className}>
                {props.children}
            </div>
        </Wrapper>
    )
}

export default Card;