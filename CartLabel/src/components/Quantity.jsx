import React from 'react'

const Quantity = ({quantity,id,changeQuantity}) => {
  return (
    <>
    <div style={{display:"flex",gap:"5px"}}>

    <button onClick={()=>changeQuantity(id,-1)} style={{backgroundColor:"#e7e7e7",color:"black",border:"2px solid #555555"}} >-</button>
    <p>{quantity}</p>
    <button onClick={()=>changeQuantity(id,+1)} style={{backgroundColor:"#e7e7e7",color:"black", border:"2px solid #555555"}}>+</button>

    </div>
    </>
  )
}

export default Quantity