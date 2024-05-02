import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Check from './pages/Check';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';
import UserProfile from './pages/UserProfile';
//import compareFiles from './util/findSim'


const App = () => {
  //var similarity = compareFiles();
  //console.log(similarity);
  return (
    <BrowserRouter>
        <Navbar />
        <div className='bg-black flex flex-col h-full min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check" element={<Check/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/profile" element={<UserProfile/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
