import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

export default function Example() {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('./assets/hero2.jpg')] bg-no-repeat bg-center">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center w-full">
          <h2 className="text-5xl font-bold tracking-tight text-grey-700 bg-gray-200 py-8">
            Connecting the world with greens!
          </h2>
        </div>
      </div>
      <div>
        <h1 className="text-9xl font-bold tracking-tight text-center text-grey-700 py-3 w-full">
          City Greens
        </h1>
      </div>
      <div className="relative isolate px-6 py-16 lg:px-8 bg-white">
        <p className="mt-6 text-lg leading-8 font-bold text-gray-600 text-center w-2/3 m-auto">
          At City Greens, we are dedicated to fostering a community of home growers who share their hard work and passion for greens. Our team is committed to building a network of individuals who not only grow their own greens but also connect with their neighbors.
        </p>
        <p className="mt-6 text-lg leading-8 font-bold text-gray-600 text-center w-2/3 m-auto">
          We believe that everyone should have access to fresh, healthy greens, and by working together, we can make that happen. Our mission is to create a platform where home growers can exchange their produce, get to know their neighbors, and support local vendors.
        </p>
        <p className="mt-6 text-lg leading-8 font-bold text-gray-600 text-center w-2/3 m-auto">
          Join us in our mission to build a stronger, greener community, one neighbor at a time.
        </p>
        {!isAuthenticated ? <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => loginWithRedirect()}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </button>
        </div> : <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            to='/search'>Search Now</Link>
        </div>}
      </div>
    </div>
  )
}
