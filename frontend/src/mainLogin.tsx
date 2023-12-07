import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login/Login'
import './index.css'
import "antd/dist/reset.css"


ReactDOM.createRoot(document.getElementById('login')!,).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,

);

