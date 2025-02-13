import React, {createContext, useState }from 'react'


export const ThemeContext = createContext();

export const themeContextProvider = ({children}) => {
    const[display,setDisplay]= useState("dark");
      const changeTheme = ()=>{
          setDisplay(display==="dark"?"white":"dark");
      }

  return (
    <ThemeContext.Provider value={{changeTheme,display}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default themeContextProvider