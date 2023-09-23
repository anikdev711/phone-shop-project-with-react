// import App from './App.jsx'
// import myCreatedRouter from './Router/Route'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Router/Route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
