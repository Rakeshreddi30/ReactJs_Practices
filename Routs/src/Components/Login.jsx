import React, { useContext } from 'react'
import { AuthContext } from '../Context/ContextProvider'
import { Navigate } from 'react-router-dom'

const Login = () => {
   const{isAuth, login} =  useContext(AuthContext)

   if(isAuth){
    return(
        <Navigate to = "/users"/>
    )
   }
  return (
    <>
      <p>Please do login! To see the content</p>
      <button onClick={login}>Login</button>
    </>
  )
}

export default Login