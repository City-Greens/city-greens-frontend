
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Page404 from './Components/404'
import VendorProfile from './Components/Profile/index'
import ProductSearch from './Components/ProductSearch'
import { withAuth0 } from "@auth0/auth0-react";

function App({ auth0 }) {
  //TODO: get role from user
  //UPDATE links based on role for profile

  const { isAuthenticated } = auth0;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={isAuthenticated ? <VendorProfile /> : <Home />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<ProductSearch />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default withAuth0(App);
