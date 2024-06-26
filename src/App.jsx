
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Page404 from './Components/404'
import VendorProfile from './Components/Profile/Vendor'
import CustomerProfile from './Components/Profile/Customer'
import ProductSearch from './Components/Search/index'
import Cart from './Components/Cart'
import { withAuth0 } from "@auth0/auth0-react";
import useAuthClaim from "./hooks/customAuth";
import Loading from './Components/Loading'


function App({ auth0 }) {
  const role = useAuthClaim('role');
  const { isAuthenticated } = auth0;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={isAuthenticated && role === 'vendor' ? <VendorProfile /> : role === 'customer' ? <CustomerProfile /> : <Loading/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<ProductSearch />} />
        <Route path="/cart" element={isAuthenticated && role === 'customer' ? <Cart /> : null} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default withAuth0(App);
