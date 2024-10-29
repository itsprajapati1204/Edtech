import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './assets/Componets/Navbar'
import './index.css'
import './App.css'
import Navitem from './assets/Componets/Navitem'
import Mainface from './assets/Componets/Mainface'
import Cta from './assets/Componets/Cta'
import Cource from './assets/Componets/Cource'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Navitem/>
    <Mainface/>
    <Cta/>
    <Cource/>
  </StrictMode>,
)
