import { useState } from "react"
import ShowPosts from "./features/posts/ShowPosts"
import { Route, Routes } from "react-router-dom"
import CreatePost from "./features/posts/CreatePost"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function App() {
  const [err, setErr] = useState('')
  const [success, setSuccess] = useState('')

  const handleButtonsClose = () => {
    setErr('')
    setSuccess('')
  }

  return (
    <>
      <header className=" bg-slate-600 text-2xl text-white p-4 justify-center space-x-4">
        <Link to="/"><span className=" hover:bg-slate-900 p-4">Posts</span></Link>
        <Link to="new_post"><span className=" hover:bg-slate-900 p-4">Create new post</span></Link>
      </header>
      <main>
        {err !== '' && (<p className="p-4 text-2xl flex justify-between bg-red-600 text-white">{err.message}<button onClick={handleButtonsClose}><FontAwesomeIcon icon={faTimes} /></button></p>) }
        {success !== '' && (<p className="p-4  text-2xl flex justify-between bg-blue-600 text-white">{success} <button onClick={handleButtonsClose}><FontAwesomeIcon icon={faTimes} /></button></p>)}

        <Routes>
          <Route index element={<ShowPosts/>}/>
          <Route path="new_post" element={<CreatePost setErr={setErr} setSuccess={setSuccess}/>}/>
        </Routes>

        
      </main>
    </>
    )
}

export default App
