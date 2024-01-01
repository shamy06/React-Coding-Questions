import HigherOrderCompoent from "./HOC";

const Student2 = (props) => {
    return (
        <>
            <h1>This is Student2 Counter {props.num}</h1>
            <button onMouseMove={ props.handleClick}>Counter</button>
        </>
    )
}

export default  HigherOrderCompoent(Student2);