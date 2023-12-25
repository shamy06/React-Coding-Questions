import { useState } from "react";

const Search = () => {
    const [fruits, setFruits] = useState(["Apple", "Orange", "Kiwi", "Banana", "Avacado", "Gauava", "Stawberry", "Mango"]);
    const [searchVlaue, setSearchValue] = useState([]);

    const handleSearch = (e) => {
        const { value } = e.target
        if (value.length > 0) {
            const c = fruits.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
            c.length > 0 ? setSearchValue(c) : setSearchValue("No item found")
        }
        else{
            setSearchValue("");
        }
    }

    return (
        <>
            <h3>Search Component</h3>
            <input type="text" placeholder="search anything" onChange={(e) => handleSearch(e)} />
            {searchVlaue.length > 0 ?
                <ul>
                    {searchVlaue.map((item) => (
                        <li key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
                :
                <ul>
                    {fruits.map((item) => (
                        <li key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            }
        </>
    );
}

export default Search;