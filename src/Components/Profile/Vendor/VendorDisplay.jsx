import logo from '../../../assets/city-greens-logo.png';

export default function VendorDisplay({ account }) {

  const vendor = account.business_profile;

  return (

    <div>
      <img src={logo} alt="City Greens Logo" />
      <h1>Welcome {vendor?.name}!</h1>
      <h2>Your account is now active!</h2>
      <p>Email: {vendor.support_email}</p>
      <p>Phone: {vendor.support_phone}</p>
      <p>Addres: {vendor.support_address.line1} {vendor.support_address.city}, {vendor.support_address.state}</p>
    </div>
  )
};
