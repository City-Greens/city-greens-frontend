import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import useAuthClaim from "../../../hooks/customAuth";
import VendorOnBoarding from './VendorOnBoarding';

const VendorProfile = () => {
  const [account, setAccount] = useState(null);
  const [detailsSubmitted, setDetailsSubmitted] = useState(null);
  const [requirements, setRequirements] = useState(null);
  const { isAuthenticated } = useAuth0();

  const stripe_id = useAuthClaim("stripe_id");
  console.log(account);

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
      setRequirements(account.requirements?.currently_due || []);
      setAccount(account);
    } catch (err) {
      console.error(err);
    }
  };

  const getSingleProduct = async () => {
    try {
      const response = await fetch('http://localhost:4242/get-products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: stripe_id,
        }),
      });
      const product = await response.json();
      console.log(product);
    } catch (err) {
      console.error(err);
    }
  };

  // const addToDB = async () => {
  //   try {
  //     const response = await fetch('http://localhost:4242/vendor', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name: account.business_profile.name,
  //         location: account.business_profile.address.city
  //
  //
  //       }),
  //     });
  //     const account = await response.json();
  //     setDetailsSubmitted(account.details_submitted);
  //     setRequirements(account.requirements?.currently_due || []);
  //     setAccount(account);
  //   }
  // });

  useEffect(() => {
    if (stripe_id && isAuthenticated) {
      getAccount();
      getSingleProduct();
    }
  }, [stripe_id, isAuthenticated]);


  return (
    <div>
      {!account ? (
        <p>Loading...</p>
      ) : !detailsSubmitted ? (
        <>
          <h1>Welcome {account.business_profile?.name}!</h1>
          <h1>Please complete your account details!</h1>
          <VendorOnBoarding />
        </>
      ) : requirements.length ? (
        <>
          <h1>Welcome {account.business_profile?.name}!</h1>
          <h1>Details submitted, but you have some requirements!</h1>
          <button>
            <a href={`https://dashboard.stripe.com/test`} target="_blank" rel="noopener noreferrer">
              Complete Requirements in your dashboard!
            </a>
          </button>
        </>
      ) : (
        <>
          <h1>Details submitted, and no requirements!</h1>
          <p>Stripe Account ID: {stripe_id}</p>
          <button>
            <a href={`https://dashboard.stripe.com/test`} target="_blank" rel="noopener noreferrer">
              Go to your dashboard!
            </a>
          </button>

        </>
      )}
    </div>
  );
};

export default VendorProfile;
