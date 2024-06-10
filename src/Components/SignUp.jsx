import React, { useState } from 'react';
const vite_backend_url = import.meta.env.VITE_BACKEND_URL;

export default function SignUp() {

  const [accountCreatePending, setAccountCreatePending] = useState(false);
  const [accountLinkCreatePending, setAccountLinkCreatePending] = useState(false);
  const [error, setError] = useState(false);
  const [connectedAccountId, setConnectedAccountId] = useState();

  const [formData, setFormData] = useState({
    individual: {
      first_name: '',
      last_name: '',
      dob: '',
      address: {
        city: '',
        country: '',
        line1: '',
        line2: '',
        postal_code: '',
        state: ''
      },
      email: '',
      phone: ''
    },
    business_profile: {
      mcc: "5499",
      name: '',
      product_description: '',
      support_email: '',
      support_phone: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    setFormData(prevState => {
      let stateCopy = { ...prevState };
      let key = stateCopy;
      for (let i = 0; i < keys.length - 1; i++) {
        key = key[keys[i]];
      }
      key[keys[keys.length - 1]] = value;
      return stateCopy;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCreateAccount = async () => {
    setAccountCreatePending(true);
    setError(false);
    const jsonData = JSON.stringify(formData);
    try {
      const response = await fetch(`${vite_backend_url}/account`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonData,
      });
      const json = await response.json();
      setAccountCreatePending(false);

      const { account, error } = json;

      if (account) {
        setConnectedAccountId(account);
      }

      if (error) {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
      setAccountCreatePending(false);
    }
  };

  const handleCreateAccountLink = async () => {
    setAccountLinkCreatePending(true);
    setError(false);
    try {
      const response = await fetch(`${vite_backend_url}/account_link`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountID: connectedAccountId,
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
      {!connectedAccountId && (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <form
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">New Vendor Form</h2>
            {/* Individual Information */}
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="individual.first_name"
                value={formData.individual.first_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="individual.last_name"
                value={formData.individual.last_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="individual.dob"
                value={formData.individual.dob}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700">Address Line 1</label>
              <input
                type="text"
                name="individual.address.line1"
                value={formData.individual.address.line1}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address Line 2</label>
              <input
                type="text"
                name="individual.address.line2"
                value={formData.individual.address.line2}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="individual.address.city"
                value={formData.individual.address.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">State</label>
              <input
                type="text"
                name="individual.address.state"
                value={formData.individual.address.state}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                name="individual.address.postal_code"
                value={formData.individual.address.postal_code}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                name="individual.address.country"
                value={formData.individual.address.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Contact Information */}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="individual.email"
                value={formData.individual.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                name="individual.phone"
                value={formData.individual.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Business Profile */}
            <div className="mb-4">
              <label className="block text-gray-700">Business Name</label>
              <input
                type="text"
                name="business_profile.name"
                value={formData.business_profile.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Product Description</label>
              <input
                type="text"
                name="business_profile.product_description"
                value={formData.business_profile.product_description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Support Email</label>
              <input
                type="email"
                name="business_profile.support_email"
                value={formData.business_profile.support_email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Support Phone</label>
              <input
                type="tel"
                name="business_profile.support_phone"
                value={formData.business_profile.support_phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleCreateAccount}
            >
              Create your business account with Stripe!
            </button>
          </form>
        </div>
      )}
      {connectedAccountId && !accountLinkCreatePending && (
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleCreateAccountLink}
        >
          Add information
        </button>
      )}
      {(connectedAccountId || accountCreatePending || accountLinkCreatePending) && (
        <div className="dev-callout">
          {connectedAccountId && <p>Your connected account ID is: <code className="bold">{connectedAccountId}</code></p>}
          {accountCreatePending && <p>Creating a connected account...</p>}
          {accountLinkCreatePending && <p>Creating a new Account Link...</p>}
        </div>
      )}
    </>
  );
}
