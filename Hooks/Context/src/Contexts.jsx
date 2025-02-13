import React, { createContext, useState } from 'react'
 
export const AuthContext = createContext();

export const Contexts = ({children}) => {
   const[isAuth, setIsAuth] = useState(false);
   const login = ()=>{
    setIsAuth(true);
   }
   const logout = ()=>{
    setIsAuth(false);
   }
  return (
    <div>
        <AuthContext.Provider value={{isAuth,login,logout}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default Contexts