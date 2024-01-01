import { useEffect, useState } from "react"

const useFetchData =(url)=>{
    const [apidata, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        const fetchData = async()=>{
            try{
            const response = await fetch(url);
            const {data} = await response.json();
            setApiData(data);
            setLoading(false);
            }
            catch(error){
                console.log(error)
                setError(error)
            }
        }
        fetchData()
    },[url]);

    return {apidata,loading,error};
}

export default useFetchData;