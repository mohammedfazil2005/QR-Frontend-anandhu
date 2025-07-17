import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import EmployeeContext from './contexts/EmployeeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <EmployeeContext>
    <App /> 
    </EmployeeContext>
    </BrowserRouter>
   
  </StrictMode>,
)
