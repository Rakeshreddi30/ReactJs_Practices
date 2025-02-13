import React from 'react'
import { NavLink } from 'react-router-dom'


const links= [
    {
      path:"/", Text:"Home"
    },
    {
      path:"/about", Text:"About"
    },
    {
      path:"/users", Text:"Users"
    }
  ]
  const defaultStyle = {
    color:"white",
    TextDecoration:"none"
  }
  const activeStyle = {
    color:"black",
    TextDecoration:"none"
  }
const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"25px", marginBottom:"50px", fontSize:"20px", padding:"10px"}}>
    {links.map((link)=>{
      return(
        <div key={link.path} style={{backgroundColor:"#555555", borderRadius:"5px",padding:"15px"}}>
          <NavLink to={link.path}
          style={({isActive})=>{
               return(
                isActive? activeStyle : defaultStyle
               )
          }}>{link.Text}</NavLink>
        </div>
      )
    })
    }
    </div>
  )
}

export default Navbar