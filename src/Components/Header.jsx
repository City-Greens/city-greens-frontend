
import logo from '../assets/city-greens-logo.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


export default function Header() {

  const { isAuthenticated } = useAuth0();
  return (
    <header className="flex justify-between items-center p-4 bg-green-600 text-white w-full">
      <div className="flex-1 flex items-center">
        <ul className="flex space-x-4">
          <li href="/" className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Sellers</li>
          <li className="cursor-pointer hover:underline">Products</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={logo} alt="Logo" className="h-12" />
      </div>
      <div className="flex-1 flex justify-end items-center">
        {isAuthenticated ? 
        <Link to="/signin" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded ml-2">Log Out</Link>
        : 
        <>
          <Link to="/signup" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded ml-2">Sign Up</Link>
          <Link to="/signin" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded ml-2">Login</Link>
        </>
        

      
      }
        
        
      </div>
    </header>
  )

}