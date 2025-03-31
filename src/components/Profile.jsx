import { useAuth0 } from "@auth0/auth0-react"; 

const Profile = () => {
    
    const { user, // An object containing user details (e.g., name, email, picture)
            isAuthenticated // A boolean indicating if the user is logged in
        } = useAuth0();

  return (
    isAuthenticated && ( // Render if isAuthenticated is true

        <article className="column">
            { /* Profile picture */
                user?.picture && <img src={user.picture} alt={user?.name} /> 
            }
            <h2> { /* Name or nickname */
                    user?.name ? user?.name : user?.nickname 
                } </h2>

            <ul> {/* All user properties as a list */}
                { // Loop over Object.keys(user)
                    Object.keys(user).map(
                        (objKey, i) => <li key={ i }>
                                            {objKey}: {user[objKey]}
                                    </li> 
                        ) 
                }
            </ul>
        </article>
    )
  )
}

export default Profile