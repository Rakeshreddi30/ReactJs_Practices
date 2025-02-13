import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Name'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Name/>
    <Content/>
    </>
  )
}

export default App
