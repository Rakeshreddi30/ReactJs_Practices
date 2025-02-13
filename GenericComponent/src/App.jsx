import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pin from './Pin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Pin length={6} maxlength={1} />
    </>
  )
}

export default App
