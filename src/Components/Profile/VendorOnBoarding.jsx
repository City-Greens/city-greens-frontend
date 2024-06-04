import useAuthClaim from "../../hooks/customAuth";
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
      setAccountLinkCreatePending(false);

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
      setAccountLinkCreatePending(false);
    }
  };

  return (
    <>
      <h1>Welcome {user.name}!</h1>
      <p>Let's get you started with your vendor account.</p>
      <p>Here are the steps:</p>
      <ol>
        <li>Click the link that will direct you to Stripe</li>
        <li>We will pass your information to Stripe</li>
        <li>Stripe will verify your information</li>
        <li>Once verified, you will be redirected back here</li>
      </ol>
      <button onClick={handleCreateAccountLink}>Create Account</button>

    </>
  )
}

