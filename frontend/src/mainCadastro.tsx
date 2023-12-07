import React from 'react'
import ReactDOM from 'react-dom/client'
import Cadastro from './components/Cadastro/Cadastro'
import './index.css'
import "antd/dist/reset.css"

ReactDOM.createRoot(document.getElementById('chat')!,).render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>,

);

