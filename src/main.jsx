import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import {Provider} from 'react-redux'
import appStore from './redux/appStore.js'


createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
        <BrowserRouter>
    {/* Toaster to show notifications */}
   <Toaster position="top-center" reverseOrder={false} />
    <App />
    </BrowserRouter>
    </Provider>
  
)
