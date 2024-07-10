import React, { useEffect, useState } from "react";
import axios from "axios";


const ApiDetails = () => {

    const [apiData, setApiData] = useState([]);
    const [currentpage, setCurrentPage] = useState(0);

    const getIssues = (page) => { return axios.get(`https://api.github.com/repositories/1300192/issues?page=${page}`); };

    useEffect(() => {
        async function getData() {
            const response = await (getIssues(currentpage + 1))
            setApiData(response.data);
        }
        getData()
        console.log(currentpage)
    }, [currentpage]);

    const nexthandleClick = () => {
        setCurrentPage(currentpage + 1);
        getIssues(currentpage);
    }

    const prehandleClick = () => {
        if (currentpage > 0) {
            setCurrentPage(currentpage - 1);
            getIssues(currentpage);
        }
    }

    return (
        <div className="mainDiv">
            <table>
                <thead>
                    <th>
                        <td>
                            Id
                        </td>
                    </th>
                    <th>
                        <td>Node_id</td>
                    </th>
                    <th>
                        <td>Number</td>
                    </th>
                    <th>
                        <td>title</td>
                    </th>
                </thead>

                {apiData.map((item) => (
                    <tbody>
                        <tr>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.node_id}
                            </td>
                            <td>
                                {item.number}
                            </td>
                            <td>
                                {item.title}
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
            <div>
                <button onClick={() => nexthandleClick()}>next page</button>
                <button onClick={() => prehandleClick()}>prev page</button>
            </div>
        </div>
    )
}

export default ApiDetails;
