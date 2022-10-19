import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css';
import Calculator from './main/Calculator'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Calculadora</h1>
    <Calculator />
  </React.StrictMode>
)
