import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from './components/nav.jsx'
import './app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <App />
  </StrictMode>,
)
