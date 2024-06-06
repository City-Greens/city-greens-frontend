import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import useAuthClaim from "../../../hooks/customAuth";
import ProductForm from './ProductForm';
import Verification from './Verification';
import VendorDisplay from './VendorDisplay';
import ProductList from './ProductList';

const VendorProfile = () => {
  const [account, setAccount] = useState(null);
  const [products, setProducts] = useState(null);
  const [detailsSubmitted, setDetailsSubmitted] = useState(null);
  const [requirements, setRequirements] = useState(null);
  const [verified, setVerified] = useState(false);
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
      const products = await response.json();
      console.log(products);
      setProducts(products);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleVerification = (word) => {
    setVerified(word);
  };


  useEffect(() => {
    if (stripe_id && isAuthenticated) {
      getAccount();
      getSingleProduct();
    }
  }, [stripe_id, isAuthenticated]);


  //TODO: create a product form
  //TODO: create a pdouct list
  //TODO: create a vendor display

  return (
    <>
      {!account && <h1>Loading...</h1>}
      {!verified ? <Verification account={account} toggleVerification={toggleVerification} detailsSubmitted={detailsSubmitted} requirements={requirements} /> : null
      }
      {verified ?

        <div className='flex'>
          <div className="flex-grow">
            <VendorDisplay account={account} />
            <ProductForm />
          </div>
          <div className='flex-grow overflow-scroll'>
            {products?.length ? <ProductList products={products} /> : <p className='py-8 text-3xl'>No products yet!</p>}
          </div>
          
        </div>
        : null}

    </>
  );
};

export default VendorProfile;
