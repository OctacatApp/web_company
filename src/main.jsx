import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import Dashboard from './pages/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className='box-content relative bg-gradient-to-l h-screen from-[#FFEDD9] via-[#D4C4B3] to-[#998F82] overflow-x-hidden'>
        <Dashboard />
      </div>
  </StrictMode>,
)
