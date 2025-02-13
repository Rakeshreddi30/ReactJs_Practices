import React, { forwardRef } from 'react'

const PinInput = forwardRef(({maxLength,onChange,onBackSpaceFun},ref) => {
    const handleKeyup =(e)=>{
        // console.log(e);
       if(e.keyCode === 8){
        onBackSpaceFun();
       }
       else{
        onChange();
       }
    };
  return (<input  ref={ref} maxLength = {maxLength} onKeyUp={(e)=>handleKeyup(e)}/>
  )
}
);
export default PinInput