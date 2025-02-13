import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import PinInput from './PinInput';

const Pin = ({length, maxlength}) => {
    const arrayLen = useRef(new Array(length).fill('a'));
    const inputRef = useRef([]);
    
    const changeHandler = (index)=>{
        if(index < length-1){
            inputRef.current[index + 1].focus();
        }
    };
    const backHandler =(index)=>{
        if(index>0){
            inputRef.current[index-1].focus();
        }
    }
    useEffect(()=>{
        console.log(inputRef.current);
    })
  return (
    <>
    <div className='pin'>
       { arrayLen.current.map((element,index)=>{
        return <PinInput
        ref={(element)=>{
         inputRef.current[index] = element;
        }}
         key={index}
         maxLength={maxlength}
         onChange={()=>changeHandler(index)}
         onBackSpaceFun = {()=>{backHandler(index)}}
         />
       })}

    </div>
    </>
   )
}
export default Pin

Pin.PropTypes={
    length : PropTypes.number.isRequired,
    maxlength : PropTypes.number,
};