/* Handles Logout */
import { useAuth0 } from "@auth0/auth0-react"; 

const LogoutButton = () => {
    const { 
            logout, // To log out the user
            isAuthenticated // A boolean indicating if the user is logged in
        } = useAuth0();

  return (
    isAuthenticated && ( // If authenticated, display "Sign Out" button
        <button 
            // Trigger logout(), logging the user out
            onClick={() => logout()}
        >
            Sign Out
        </button>
    )
  )
}

export default LogoutButton