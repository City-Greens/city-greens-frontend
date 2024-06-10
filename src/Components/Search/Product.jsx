import { useAuth0 } from '@auth0/auth0-react';
import defaultImage from '../../assets/gen-produce.jpg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../storage/cart';
import { useSelector } from 'react-redux';
import useAuthClaim from '../../hooks/customAuth';

export default function Product({ product }) {

  const current_vendor = useSelector((state) => state.cart.vendor_selected);
  const cart = useSelector((state) => state.cart.cart);
  const { name, price, description, business_name } = product;
  const role = useAuthClaim('role');

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (cart.length > 0) {
      console.log("vendor", current_vendor, 'product.stipeAccount', product.stripeAccount);
      if (current_vendor === product.stripeAccount) {

        dispatch(addToCart(product));
      } else {
        alert("You can only add items from one vendor at a time!");
        //TODO: ASK if they want to clear cart and add current product to cart
      }
    };
    if (cart.length === 0) {
      dispatch(addToCart(product));
    }
  };

  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <div className="w-1/3 bg-white shadow-lg rounded-lg overflow-hidden mt-4">
      <div className="flex">
        <div className="w-1/3">
          <img className="h-full w-full object-cover" src={defaultImage} alt={name} />
        </div>
        <div className="w-2/3 px-6 py-4">
          <h3 className="font-bold text-xl mb-2">{name}</h3>
          <p className="text-gray-900 text-base">Vendor: {business_name}</p>
          <p className="text-gray-700 text-base">Price: ${price}</p>
          {description ? <p className="text-gray-700 text-base mt-2">Description: {description}</p> : <p className="text-gray-700 text-base mt-2">No description available</p>}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        {isAuthenticated && role === 'customer' ? <button onClick={() => handleAddToCart()} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Add to Cart
        </button> : null}
        {!isAuthenticated && < button onClick={() => loginWithRedirect()} className="bg-gray-700 hover:bg-gray-600 text-white text-l py-3 px-6 rounded ml-2"> Sign Up to Add to Cart!</button>}
      </div>
    </div >
  );
}
