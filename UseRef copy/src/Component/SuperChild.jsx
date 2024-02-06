import { useContext } from "react"
import { GlobalContext } from "../App"

const SuperChild =()=>{
    const {textColor,getDay} = useContext(GlobalContext);
    const Day="Sunday";
    return(
        <h1 style={{color:textColor}}>
            This is Super Child <br/>
            <button onClick={()=>getDay(Day)}>Click Me</button>
        </h1>
    )
}

export default SuperChild;