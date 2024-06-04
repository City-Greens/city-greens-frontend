import { useAuth0 } from "@auth0/auth0-react";
import useAuthClaim from "../hooks/customAuth";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const role = useAuthClaim('role');
  const onboarded = useAuthClaim('onboarded');
  

  return (
    isAuthenticated && (role === "vendor") && (
      <div className='profile'>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p><strong>Role:</strong> {role}</p>
      </div>
    )
  );
};

export default Profile;