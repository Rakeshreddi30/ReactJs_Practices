import React from 'react'

const Items = ({item,price,id}) => {
  return (
    <>
    <div style={{display:"flex", gap:"30px",justifyContent:"space-around"}}>
      <div style={{textAlign:"left"}}>
        <p>{item}</p>
      </div>
    <div>
      <p>$:{price}</p>
    </div>

    </div>
    
    </>
  )
}

export default Items