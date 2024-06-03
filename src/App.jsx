
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Auth from './Components/Auth'

function App() {

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

export default App
