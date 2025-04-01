/* Main UI Component */
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import Profile from "./components/Profile"
import { useAuth0 } from "@auth0/auth0-react"


function App() {

  // Get loading state & errors
  const { isLoading, error } = useAuth0()

  return (
      <main className="column">

        <h1>Auth0 Login</h1>

        { // Show error message if authentication fails
          error && <p>Authentication Error</p> 
        }

        { isLoading ? ( // Show "Loading..." text while Auth0 is processing login

          <p>Loading...</p> 

        ) : ( // After Auth0 Loads (isLoading becomes false)
          <>
              <LoginButton /> {/* Render LoginButton (if not authenticated) */}
              <LogoutButton /> {/* Render LogoutButton (if authenticated) */}
              <Profile /> {/* Render Profile (if authenticated) */}
          </>

        )}
      </main>
  )
}

export default App
 