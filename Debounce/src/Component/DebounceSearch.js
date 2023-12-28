import React, { useState } from "react";

const DebounceSearch = () => {
    const [inputValue,setInputValue] =useState("");
    const[debouncedInput, setDebouncedInput] =useState("");

    const handleChange=(event)=>{
        const {value} =event.target;
        setInputValue(value);
    }

    useEffect(()=>{
        const timeOut=setTimeout(()=>{
            setDebouncedInput(inputValue);
            console.log({inputValue})
        },500);
        return ()=>clearTimeout(timeOut);
    },[inputValue,500])

    return(
        <>
        <h1>Debouncing Input</h1>
        <input type="text" onChange={handleChange} value={inputValue}/>
        </>
    )
}
export default DebounceSearch;