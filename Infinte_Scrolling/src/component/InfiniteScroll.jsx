import { useEffect } from "react";
import { useState } from "react";

const InfiniteScroll = () => {
    const [post, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(10);
    const [loading, setLoading] = useState()

    const fetchMorePosts = async (pageNumber) => {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/posts?limit=10&skip=${pageNumber}&select=title,reactions,userId`);
        const data = await response.json();
        setLoading(false);
        setPosts((prevPosts) => [...prevPosts, ...data.posts]);
    }
    useEffect(() => {
        fetchMorePosts(currentPage);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)

    }, [currentPage]);

    const handleScroll = async () => {
        if (window.innerHeight + Math.round(window.scrollY) >=document.body.offsetHeight) {
            setCurrentPage((prevPage)=> prevPage +1);
                fetchMorePosts(currentPage);
            }
        }

    return (
        <>
            <div className="App">
                {/* Render the posts */}
                {post.map((posts) => (
                    <div key={posts.userId}>
                        <table>
                            <thead>
                                {/* <tr> */}
                                    <th>
                                        Id
                                    </th>
                                    <th>
                                        Title
                                    </th>
                                    <th>
                                        Reactions
                                    </th>
                                    <th>
                                        UserId
                                    </th>
                                {/* </tr> */}
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {posts.id}
                                    </td>
                                    <td>
                                        {posts.title}
                                    </td>
                                    <td>
                                        {posts.reactions.likes}
                                    </td>
                                    <td>
                                    {posts.userId}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
                {/* Render the loader if loading */}
                {loading && <h1>....Loading</h1>}
            </div>
        </>
    )
}

export default InfiniteScroll;