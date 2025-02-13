import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Restaurants from './Components/Restaurants'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
      <Route path='/' element={<Restaurants/>}/>
   </Routes>
   </>
  )
}

export default App
