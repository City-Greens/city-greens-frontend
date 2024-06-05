import { useEffect } from 'react';
import VendorOnBoarding from './VendorOnBoarding';

export default function Verification({ account, detailsSubmitted, requirements, toggleVerification }) {



  useEffect(() => {
    if (!detailsSubmitted || requirements.length) {
      toggleVerification(false);
    }

    if (detailsSubmitted && !requirements.length) {
      toggleVerification(true);
    }
  }, [detailsSubmitted, requirements, toggleVerification]);


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
      ) : null}

    </div>
  )

}
