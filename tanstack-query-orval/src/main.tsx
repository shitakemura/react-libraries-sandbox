import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { worker } from './mocks/browser.ts'

if (process.env.NODE_ENV === 'development') {
  worker.start().catch((error) => console.log(error))
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
