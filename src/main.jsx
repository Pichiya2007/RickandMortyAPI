import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RickMortyApp } from './components/RickMortyApp'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RickMortyApp/>
  </StrictMode>,
)
