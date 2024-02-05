const { useRef } = require("react")

const FocusInput =()=>{
    const inputref = useRef(null);

    const handleClick =()=>{
        inputref.current.focus();
    }

    return(
        <>
        <h1>this is Focus Input with useRef</h1>
        <input ref={inputref}/>
        <button onClick={handleClick}>Focus Input</button>
        </>
    )
}

export default FocusInput;