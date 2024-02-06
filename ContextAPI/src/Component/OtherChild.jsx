import { useContext } from "react"
import { GlobalContext } from "../App"

const OtherChild =()=>{
    const {textColor} = useContext(GlobalContext);
    return(
        <h1 style={{color:textColor}}>
            This is Other node Child
        </h1>
    )
}

export default OtherChild;