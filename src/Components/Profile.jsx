import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user, isAuthenticated, getIdTokenClaims } = useAuth0();
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const claims = await getIdTokenClaims();
        console.log("ID Token Claims:", claims); // Log the complete ID token claims

        const namespace = 'https://city-greens.com/'; // Use your custom namespace
        const userRole = claims[`${namespace}role`];
        setRole(userRole);
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    if (isAuthenticated) {
      fetchUserRole();
    }
  }, [isAuthenticated, getIdTokenClaims]);

  return (
    isAuthenticated && (
      <div className='profile'>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {role && <p><strong>Role:</strong> {role}</p>}
      </div>
    )
  );
};

export default Profile;