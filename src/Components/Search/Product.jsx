import { useAuth0 } from '@auth0/auth0-react';
import defaultImage from '../../assets/city-greens-logo.png';

export default function Product({ name, price, description }) {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
      <div className="flex">
        <div className="w-1/3">
          <img className="h-full w-full object-cover" src={defaultImage} alt={name} />
        </div>
        <div className="w-2/3 px-6 py-4">
          <h3 className="font-bold text-xl mb-2">{name}</h3>
          <p className="text-gray-700 text-base">Price: ${price}</p>
          {description ? <p className="text-gray-700 text-base mt-2">Description: {description}</p> : <p className="text-gray-700 text-base mt-2">No description available</p>}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        {isAuthenticated && <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Add to Cart
        </button>}
      </div>
    </div>
  );
}
