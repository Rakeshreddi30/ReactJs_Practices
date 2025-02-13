import React, { useEffect, useState } from 'react'

export const Display = ()=>{
    const[value, setValue] = useState(10);
    useEffect(()=>{
       console.log("component Mounted");
       return ()=>{
        console.log("component unmounted");
       }
    },[])
    // const handleIncrement =()=>{
    //       setValue(prev=>prev+1);
    //     }
    // console.log(value);
    return(
      <>
         {/* <div>
             <p>Count : {value}</p>
            <button onClick={handleIncrement} >Click</button>
         </div> */}
         <h1>Hello!</h1>
      </>
    )
}
export default Display