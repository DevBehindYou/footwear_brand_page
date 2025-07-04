import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Nav from './components/nav.jsx'
import './app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <App />
  </StrictMode>,
)
