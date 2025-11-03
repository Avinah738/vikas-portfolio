import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// PWA service worker (public/sw.js)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {})
    })
}
