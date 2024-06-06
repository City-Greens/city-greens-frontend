import logo from '../../../assets/city-greens-logo.png';

export default function VendorDisplay({ account }) {

  const vendor = account.business_profile;

  return (

    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8 p-6">
      <div className="flex justify-center mb-6">
        <img className="h-16 w-16 object-contain" src={logo} alt="City Greens Logo" />
      </div>
      <h1 className="text-2xl font-bold text-center mb-2">Welcome {vendor?.name}!</h1>
      <h2 className="text-xl text-center text-gray-700 mb-4">Your account is now active!</h2>
      <div className=" text-gray-700">
        <p className="mb-2">Email: {vendor.support_email}</p>
        <p className="mb-2">Phone: {vendor.support_phone}</p>
        <p>Address: {vendor.support_address.line1} {vendor.support_address.city}, {vendor.support_address.state}</p>
      </div>
    </div>
  )
};
