import React, { useState } from 'react';

const HigherOrderCompoent = (Stduent) => {
    const HigherOrderComponentInner = () => {
        const [num, setNum] = useState(0);
        const handleClick = () => {
            setNum(num + 10);
        }
        return (
            <Stduent num={num} handleClick={handleClick} />
        )
    }
    return HigherOrderComponentInner;
}

export default HigherOrderCompoent;