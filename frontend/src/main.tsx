import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "antd/dist/reset.css"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import Login from './components/Login/Login'
import Cadastro from './components/Cadastro/Cadastro'
import Chat from './components/Chat/Chat'


const router = createBrowserRouter([{
  path: "/",
  element: <Login />
},
{
  path: "cadastro",
  element: <Cadastro />
},
{
  path: "chat",
  element: <Chat />
}
])


ReactDOM.createRoot(document.getElementById('root')!,).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,

);

