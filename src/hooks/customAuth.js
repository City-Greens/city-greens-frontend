import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const useAuthClaim = (claimKey) => {
  const { user, isAuthenticated, getAccessTokenSilently, getIdTokenClaims } =
    useAuth0();
  const [claimValue, setClaimValue] = useState(null);

  useEffect(() => {
    const fetchAppMetadata = async () => {
      if (isAuthenticated) {
        try {
          const claims = await getIdTokenClaims();

          const namespace = "https://www.city-greens.com/"; // Use your custom namespace
          const userRole = claims[`${namespace}${claimKey}`];
          setClaimValue(userRole);
        } catch (error) {
          console.error("Error fetching app_metadata:", error);
        }
      }
    };

    fetchAppMetadata();
  }, [isAuthenticated, getAccessTokenSilently, user, claimKey]);

  return claimValue;
};

export default useAuthClaim;
