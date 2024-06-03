
import logo from '../assets/city-greens-logo.png';


export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-green-600 text-white w-full">
      <div className="flex-1 flex items-center">
        <ul className="flex space-x-4">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Sellers</li>
          <li className="cursor-pointer hover:underline">Products</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={logo} alt="Logo" className="h-12" />
      </div>
      <div className="flex-1 flex justify-end items-center">
        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded ml-2">Login</button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded ml-2">Sign Up</button>
      </div>
    </header>
  )

}