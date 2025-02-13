import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contexts from './Contexts.jsx'
import ThemeContextProvider from './themeContextProvider.jsx'
createRoot(document.getElementById('root')).render(
      <ThemeContextProvider>
         <Contexts>
            <App/>
        </Contexts>
       </ThemeContextProvider>

     

 
)
