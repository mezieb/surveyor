import React from "react";
import {BrowserRouter,Routes, Route,} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Testimonial from "./pages/Testimonial";
import Thankyou from "./pages/Thankyou";


function App() {
  return (
    
    <div className="app">
         <BrowserRouter>
         <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Project" element={<Project/> } />
      <Route path="/Services" element={<Services/> } />
      <Route path="/About" element={<About/> } />
      <Route path="/Testimonial" element={<Testimonial/> } />
      <Route path="/Contact" element={<Contact/> } />
      <Route path="/Thankyou" element={<Thankyou/> } />
     </Routes>
     <Footer/>
  </BrowserRouter>

    </div>
      
 
    
  );
}

export default App;
