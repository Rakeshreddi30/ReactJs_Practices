import React, { useContext } from 'react'
import { AuthContext } from './Contexts'
import { ThemeContext } from './themeContextProvider'


export const Navbar = () => {
    
   const{isAuth, login, logout}= useContext(AuthContext)
  //  const{display}= useContext(ThemeContext)
  return (
    <div style={{border:"1px solid white", padding:"20px", gap:"10px"}}>
      <p>User is Authenticated : {isAuth?"Yes":"No"}</p>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
     </div>

  
  )
}
