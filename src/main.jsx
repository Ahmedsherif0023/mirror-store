import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as ServiceWorkerRegistration from './serviceWorkerRegistration.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


ServiceWorkerRegistration.register();



