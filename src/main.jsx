import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Procura no index.html o elemento com id="root"
createRoot(document.getElementById('root')).render(
  // StrictMode ajuda a detectar erros e boas práticas
  <StrictMode>
    <App />
  </StrictMode>,
)
