import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PairProvider from "./utils/context/pairContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PairProvider>
        <App />
    </PairProvider>
  </React.StrictMode>,
)