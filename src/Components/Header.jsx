import logo from '../assets/city-greens-logo.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import { FaShoppingBasket } from 'react-icons/fa';
import useAuthClaim from '../hooks/customAuth';

export default function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const cartItems = useSelector((state) => state.cart.cart.length);
  const role = useAuthClaim('role');

  return (
    <header className="flex justify-between items-center p-4 bg-green-600 text-white w-full">
      <div className="flex-1 flex items-center">
        <ul className="flex space-x-4">
          <li className="cursor-pointer hover:underline text-xl px-4"><Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:underline text-xl px-4"><Link to="/search">Products</Link></li>
          {isAuthenticated ?
            <li className="cursor-pointer hover:underline text-xl px-4"><Link to="/profile">Profile</Link></li>
            : null}
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={logo} alt="Logo" className="h-24" />
      </div>
      <div className="flex-1 flex justify-end items-center">
        {role === 'customer' && <Link to="/cart" className="flex items-center space-x-2 cursor-pointer">
          <FaShoppingBasket size={30} />
          <span>{cartItems}</span>
        </Link>}
        {isAuthenticated ?
          <button onClick={() => logout({ returnTo: window.location.origin })} className="bg-gray-700 hover:bg-gray-600 text-white text-xl py-3 px-6 rounded ml-2">Log Out</button>
          :
          <button onClick={() => loginWithRedirect()} className="bg-gray-700 hover:bg-gray-600 text-white text-xl py-3 px-6 rounded ml-2"> Login </button>
        }
      </div>
    </header>
  )
}
