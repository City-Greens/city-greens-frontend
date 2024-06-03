
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Auth from './Components/Auth'
import { withAuth0 } from "@auth0/auth0-react";

function App({ auth0 }) {

  const { isAuthenticated } = auth0;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default withAuth0(App);
