import { useState } from "react";

const DebounceSearch = () => {
    const [nestedObjected, setNestedObject] = useState({
        taxi: "a car licensed to transport passengers in return for payment of a fare",
        food: {
            sushi:
                "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
            apple: {
                Honeycrisp:
                    "an apple cultivar developed at the MAES Horticultural Research Center",
                Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
            },
        },
    });
    
    const RecursiveFunction = (data) => {
        return Object.entries(data).map(([key, value]) => {
            if (typeof value === 'object') {
                return (
                    <div key={key}>
                        <strong>{key}</strong>: {RecursiveFunction(value)}
                    </div>
                );
            } else {
                return (
                    <div key={key}>
                        <strong>{key}</strong>: {value}
                    </div>
                );
            }
        })
    }

    return (
        <>
            <RecursiveFunction obj={nestedObjected} />
        </>
    )
}

export default DebounceSearch;