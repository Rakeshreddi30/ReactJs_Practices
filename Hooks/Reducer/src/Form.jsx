import React, { useReducer } from 'react'

const reducer = (state, action)=>{
   if(action.type === 'UPDATE_AGE'){
    return {age:state.age+1};   
   }
   return state;
}
const Form = () => {
    const[state, dispatch] = useReducer(reducer, {age:23});
    const updateAge = ()=>{
        dispatch({type:'UPDATE_AGE'});
    }
  return (
    <div>
        <input type='number' name='age'/>
        <p>Your current age : {state.age} </p>
        <button onClick={()=>{updateAge()}}>Update age</button>
     </div>
  )
}

export default Form