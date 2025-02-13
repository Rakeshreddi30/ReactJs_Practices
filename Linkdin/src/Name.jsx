import React from 'react'
import './Name.css'
import shiva from './assets/images/shiva.jpeg'
import { MainBtn } from './data'
const Name = () => {
  return (
    <>
    <div className='container'>
        <div className='container-main'>
        <div>
           <img src={shiva} alt='shiva' className='image'/>
        </div>
        <div className='name'>
            <h4>Shiva Kumar</h4>
            <div className='name-p'>
               <p>3,844 followers</p>
                <p>Manage Followers</p>
            </div>
        </div>
        </div>
         <div className='container-btn'>
                {MainBtn.map((elements)=>(
                    <button key={elements.id}>{elements.text}</button>
                ))}
            </div>
    </div>
    </>
  )
}

export default Name