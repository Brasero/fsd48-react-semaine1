import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TownContext from "./utils/context/townContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TownContext>
        <App />
    </TownContext>
  </React.StrictMode>,
)