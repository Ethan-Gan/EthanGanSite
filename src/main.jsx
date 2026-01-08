import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import {BrowserRouter } from 'react-router-dom'
import './styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div class="nav-spacing"></div>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
