/* Main UI Component */
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import Profile from "./components/Profile"


function App() {
  return (
      <main className="column">
        <h1>Auth0 Login</h1>
        <LoginButton /> {/* LoginButton for signing in */}
        <LogoutButton /> {/* LogoutButton for signing out */}
        <Profile /> {/* Show user information after login */}
      </main>
  )
}

export default App
 