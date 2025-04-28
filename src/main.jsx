import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import {Provider} from 'react-redux'
import appStore from './redux/appStore.js'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = window.location.origin;

createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
    redirect_uri: window.location.origin,
    prompt: "login"  // or "consent" depending on your app
  }}
  cacheLocation="localstorage"   // <<< This is important !!
  useRefreshTokens={true}         // <<< This avoids full reload issues

    
  >
    <BrowserRouter>
    {/* Toaster to show notifications */}
   <Toaster position="top-center" reverseOrder={false} />
    <App />
    </BrowserRouter>
  </Auth0Provider>
        
    </Provider>
  
)
