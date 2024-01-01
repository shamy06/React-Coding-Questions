import HigherOrderCompoent from "./HOC";

const Student1 =(props)=>{

    return(
        <>
        <h1>Student1 Number {props.num}</h1>
        <button onClick={props.handleClick}>Count Number</button>
        </>
    )
}

export default HigherOrderCompoent(Student1);