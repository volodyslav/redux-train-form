import { useState } from "react"
import { postCreate } from "./postsSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"


const CreatePost = ({setErr, setSuccess}) => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")


    const handleCreatePost = () => {
        try{
            if(title && text){
                dispatch(postCreate(title, text))
            }
            setText("")
            setTitle("")
            setSuccess("Your post was created successfully!")
        }
        catch(err){
            setErr(err)
        }
    }

    return (
        <div className=" flex flex-justify ">
            <form className=" flex flex-col w-1/2 mx-auto space-y-4">
            <h2 className=" text-3xl text-center mt-4">New Post</h2>
                <label htmlFor="title"></label>
                <input 
                    id="title"
                    required className="  p-2 border border-gray-500"
                    maxLength={30} placeholder="Title (30 letters)"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="text"></label>
                <textarea 
                    id="text"
                    required className=" h-40 p-2 border border-gray-500"
                    maxLength={300} placeholder="Text (300 letters)"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button disabled={!title || !text} type="button" onClick={handleCreatePost} className="w-fit mx-auto disabled:bg-slate-500 bg-green-900 text-white p-2 rounded-lg hover:bg-green-600"><Link to="/">Add post</Link></button>
            </form>
        </div>
    )
}

export default CreatePost