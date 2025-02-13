import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contexts from './Contexts'
import { Navbar } from './Navbar'
import { ThemeContext } from './themeContextProvider'


function App() {
  
  const {changeTheme, display} = useContext(ThemeContext)

  // console.log("ThemeContext in Component:", context);

  // if (!context) {
  //   console.error("ThemeContext is undefined. Ensure the provider wraps this component.");
  // }

  return (
  
     <div style={{background:display==="dark"?"black":"white",
         color:display==="dark"?"white":"black",
       padding:"10px"
        }}>
       <Navbar/>
        <p>Theme is:{display} </p>
       <button onClick={changeTheme}>Change Theme</button>
     </div>
   
  )
}

export default App
