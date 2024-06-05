import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import useAuthClaim from "../../hooks/customAuth";
import VendorOnBoarding from './VendorOnBoarding';

const VendorProfile = () => {
  const [account, setAccount] = useState(null);
  const [detailsSubmitted, setDetailsSubmitted] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requirements, setRequirements] = useState(null);
  const { isAuthenticated } = useAuth0();

  const stripe_id = useAuthClaim("stripe_id");

  const getAccount = async () => {
    try {
      const response = await fetch('http://localhost:4242/get-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountID: stripe_id,
        }),
      });
      const account = await response.json();
      setDetailsSubmitted(account.details_submitted);
      console.log('account requirements', account.requirements);
      setRequirements(account.requirements.currently_due);

      setAccount(account);
      console.log('response', account);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAccount();
  }, [stripe_id, isAuthenticated]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  //BUG: Flashes onboarding page before states are set. async issue, tried to fix with loading state
  if (!detailsSubmitted && !loading && account) {
    console.log('inner account', account);
    return (
      <>
        <h1>Welcome {account.business_profile.name}!</h1>
        <h1>Please complete your account details!</h1>
        <VendorOnBoarding />
      </>
    )
  }

  //TODO: iFrame for dashboard! 
  //STYLE THE BUTTON HARD TO SEE
  if (detailsSubmitted && requirements.length) {
    return (
      <>
        <h1>Welcome {account.business_profile.name}!</h1>
        <h1>Details submitted, but you have some requirements!</h1>
        <button><a href={`https://dashboard.stripe.com/test`} target="_blank">Complete Requirements in your dashboard!</a></button>
      </>
    )
  }


  //TODO: Future component for profile page. Maybe goes to dashboard? Add products? idk
  //Might have to pass account as props
  if (detailsSubmitted && !requirements.length) {
    return (
      <>
        <h1>Details submitted, and no requirements!</h1>
        <p>Stripe Account ID: {stripe_id}</p>
      </>
    )
  }

};

export default VendorProfile;

