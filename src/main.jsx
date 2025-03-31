/* App Entry Point */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // bootstrapping the React app
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

// Fetch domain and clientId from environment variables (set in .env)
const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider // Wrap the app to provide authentication context
      domain={domain}
      clientId={clientId}
      authorizationParams={{ 
        redirect_uri: window.location.origin // After login, redirect users to homepage
      }} 
    > 
      <App />
    </Auth0Provider>
  </StrictMode>,
)