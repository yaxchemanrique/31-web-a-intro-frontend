import React from "react"
import { Link, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Books from "./Books"
import Book from "./Book"
import NotFound from "./NotFound"
import NewBook from "./NewBook"


function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/books' >Books</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
        <Route path='/books/new' element={<NewBook/>}></Route>
        <Route path='/books/:id' element={<Book/>}></Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
