
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// Should put in the most under import file
import "@assets/styles/index.css"
import "@assets/styles/ui/input.css"
import "@assets/styles/ui/modal.css"
import "@assets/styles/ui/tooltip.css"
import "@assets/styles/ui/progress-step.css"
import "@assets/styles/ui/table.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
