import { useAuth0 } from "@auth0/auth0-react";
import useAuthClaim from "../../hooks/customAuth";
import VendorOnBoarding from "./VendorOnBoarding";

const Profile = () => {
  const { isAuthenticated } = useAuth0();
  const role = useAuthClaim("role");
  const onboarded = useAuthClaim("onboarded");

  return isAuthenticated && role === "vendor" && !onboarded ? (
    <>
      <VendorOnBoarding />
    </>
  ) : null;
};

export default Profile;

