import axios from "axios";
import { useEffect, useState } from "react";

export const SortData = () => {
    const [userData, setUserData] = useState([]);
    const URL = "https://reqres.in/api/users";

    const Response = () => { return axios.get(URL) }

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await Response()
                const sortedData =response.data.data.sort((a,b)=>a.first_name.localeCompare(b.first_name))
                setUserData(sortedData);
            }
            catch (error) {
                console.log(error)
            }
        }
        getData();
    }, []);

    return (
        <>
            <table style={{border:"1px solid black"}}>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((item) => (
                        <tr>
                            <td>
                                {item.first_name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}