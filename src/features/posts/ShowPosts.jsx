import { showAllPosts } from "./postsSlice"
import { useSelector } from "react-redux"
import ShowTime from "./ShowTime"

const ShowPosts = () => {
    const posts = useSelector(showAllPosts)

    const showPosts = posts.map(post => (
        <div key={post.id} className=" group p-4 text-2xl border duration-300 text-center  ease-in-out text-white hover:bg-white hover:text-black bg-blue-500 hover:border-blue-500 rounded-lg ring-2  ring-blue-500">
            <h1>{post.title}</h1>
            <p>{(post.text).length > 50 ? `${(post.text).slice(0, 50)}...` : post.text}</p>
            <p className=" group-hover:text-gray-800 text-gray-200 text-lg "><ShowTime time={post.date}/></p>
        </div>
    ))
    
    
    return (
        <div className="grid justify-center gap-4 my-4 grid-cols-2 mx-4">
            {showPosts}
        </div>
    )
}

export default ShowPosts