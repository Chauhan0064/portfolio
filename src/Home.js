import React from 'react'
import Navbar from './Compontes/Navbar'
import './Compontes/Css/Home.css'
import Main from './Compontes/Main'
import About from './Compontes/About'
import Contact from './Compontes/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Skills from './Compontes/Skills'
import Project from './Compontes/Project'

const Home = () => {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/project' element={<Project/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/skills' element={<Skills/>} />
        </Routes>
    </BrowserRouter>  
    </>
  )
}

export default Home