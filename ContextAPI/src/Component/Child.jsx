import { useContext } from "react";
import { GlobalContext } from "../App";
import SuperChild from "./SuperChild";

const Child =()=>{
    const {textColor} = useContext(GlobalContext);

    return(
        <div>
            <h1 style={{color:textColor}}>Child Component</h1>
            <SuperChild/>
        </div>
    )
}

export default Child;