import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './Display'
import { useState } from 'react'

function App() {
    const[value, setValue]=useState(false);
  const handleToggle = ()=>{
       setValue(!value);
       console.log(value);
  }

  return (
    <>
       <div>
          <button onClick={handleToggle}>Toggle Component</button>
       </div>
         {value && <Display/>}   
      </>
  )
}

export default App
