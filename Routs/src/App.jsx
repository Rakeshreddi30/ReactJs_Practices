import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link, NavLink} from 'react-router-dom'

import About from './Components/About'
import Home from './Components/Home'
import Users from './Components/Users'
import Navbar from './Context/Navbar'
import SingleUser from './Components/SingleUser'
import Login from './Components/Login'
import NotFound from './Components/NotFound'

function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="users/:id" element={<SingleUser/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
