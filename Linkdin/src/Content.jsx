import React from 'react'
import './container.css'
import shiva from './assets/images/shiva.jpeg'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/solid'
// import { HandThumbUpIcon } from "@heroicons/react/24/outline"
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline"
const Content = () => {
  const Icons =[
    {
        id:1, icon: <HandThumbUpIcon/>, text:'Like'
    },
    {
        id:2, icon:<ChatBubbleOvalLeftIcon/>, text:"comment"
      
    }
]
  return (
    <>
    <div className='container2'>
         <div className='container2-main'>
                <div>
                   <img src={shiva} alt='shiva' className='image2'/>
                </div>
                <div className='name2'>
                    <div className='name2-head'>
                     <h4>Shiva Kumar</h4>
                     <p> . You</p>
                     <span className='name2-head-p2'>...</span>
                    </div>
                    <div className='name2-p'>
                       <p>Frontend Engineer specializing in MERN/MEAN stack</p>
                        <p>23h.Edited</p>
                    </div>
              </div>
          </div>
          <div className='content'>
                <p>Listen Up Young dev..........</p>
                <span className='content-span'>...more</span>
          </div> 
      <div className='content-icon'>
         <div className='icons'>
                <HandThumbUpIcon className="thumb"/>
                <HeartIcon className='heart'/>
         </div>  
         <div className='buttons'>
          <button className='custom-button'>4 comments .  </button>
          <button className='custom-button'>  4 reposts</button>
        </div> 
      </div>
      <hr/>
      <div>
        <div>
        <div className="button-fun">
          { Icons.map((item)=>(
              <div key={item.id} className='thumbup'>
               {item.icon}
          <p className="like-text">{item.text}</p>
           </div>
          
          ))
          } 
       </div>
       
        </div>
      </div>
    </div>
    </>
  )
}

export default Content