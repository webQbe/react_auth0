/* Handles Login */
import { useAuth0 } from "@auth0/auth0-react"; 

const LoginButton = () => {
    const { 
            loginWithRedirect, // To trigger Auth0 login
            isAuthenticated // A boolean indicating if the user is logged in
        } = useAuth0();

  return (
    !isAuthenticated && ( // If not authenticated, display "Sign In" button
        /*  */
        <button 
            // Redirect user to Auth0’s login page
            onClick={ () => loginWithRedirect() }
        >
            Sign In
        </button>
    )
  )
}

export default LoginButton