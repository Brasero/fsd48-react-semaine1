import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StudentContextProvider from "./utils/context/StudentContext.jsx";
import ThemeContextProvider from "./utils/context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudentContextProvider>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </StudentContextProvider>
  </React.StrictMode>,
)