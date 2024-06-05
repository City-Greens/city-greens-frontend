import React from 'react';
import useAuthClaim from "../../../hooks/customAuth";
import { useAuth0 } from "@auth0/auth0-react";

export default function VendorOnBoarding() {
  const { user } = useAuth0();
  const onboarded = useAuthClaim('onboarded');
  const strip_id = useAuthClaim('stripe_id');

  const handleCreateAccountLink = async () => {
    try {
      const response = await fetch("http://localhost:4242/account_link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          account: strip_id,
        }),
      });
      const json = await response.json();

      const { url, error } = json;
      if (url) {
        window.location.href = url;
      }

      if (error) {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };
  return (
    <>
      <h1 className="text-2xl font-bold text-blue-600">Welcome {user.nickname}!</h1>
      <p className="mt-2 text-lg text-gray-700">Let's get you started with your vendor account.</p>
      <p className="mt-2 text-lg text-gray-700">Here are the steps:</p>
      <ol className="list-decimal list-inside mt-2 text-lg text-gray-700">
        <li>Click the link that will direct you to Stripe</li>
        <li>We will pass your information to Stripe</li>
        <li>Stripe will verify your information</li>
        <li>Once verified, you will be redirected back here. Reload the page to see updates.</li>
      </ol>
      <button onClick={handleCreateAccountLink} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Create Account</button>
    </>
  )
}
