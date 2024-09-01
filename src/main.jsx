// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SmoothScrolling from './components/utils/SmoothScrolling'

createRoot(document.getElementById('root')).render(
    <SmoothScrolling>
      <App />
    </SmoothScrolling>
)
