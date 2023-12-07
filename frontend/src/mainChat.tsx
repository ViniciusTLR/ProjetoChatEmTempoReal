import React from 'react'
import ReactDOM from 'react-dom/client'
import Chat from './components/Chat/Chat';
import './index.css'
import "antd/dist/reset.css"

ReactDOM.createRoot(document.getElementById('chat')!,).render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,

);

