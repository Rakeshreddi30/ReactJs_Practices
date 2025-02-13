import React from 'react'
import './Styles/Navbar.css'
import { pageLinks, socialLinks } from '../data'
const Navbar = () => {
  return (
    <>
    <nav className="Nav">
        <div className='nav-center'>
          <div className='nav-header'>
            <div>
              Portfolio
           </div>
            </div>
            <ul className='nav-link' id='nav-links'>
              {pageLinks.map((data)=>{
                return(
                  <a href={data.href} key={data.id} className='nav-links'>{data.text}</a>
                )
              })}
            </ul>
             <ul className='nav-icons'>
                     {socialLinks.map((data)=>{
                       return(
                         <a href={data.href} key={data.id}>{data.icon}</a>
                        )
                      })}
                </ul>
         </div>
    </nav>
    </>
  )
}

export default Navbar