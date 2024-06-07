import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./i18next/i18n.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <React.Suspense fallback="loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
