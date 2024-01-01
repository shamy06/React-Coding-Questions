import useFetchData from "./useFetchData";


const GitIssues = () => {
    const { loading, error, apidata } = useFetchData('https://reqres.in/api/users');

    return (
        <>
            {loading ? <h1>Loading data....</h1> :
                error ? <h4>{error}</h4> :
                    <div>
                        <h1>Data </h1>
                        {apidata.map((item) => (
                            <div style={{display:"inline-table"}}>
                                <h1>{item.id}</h1>
                                <div style={{padding:".5rem"}}>
                                <h3>{item.email}</h3>
                                </div>
                            </div>
                        ))}

                    </div>
            }
        </>
    )
}

export default GitIssues;