import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
//import Footer from "./components/footer";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  
  return (
    <div className="SCREEN flex w-full min-h-screen h-full dark:bg-gray-500 place-content-center">
      <div className="CONTAINER dark:bg-gray-800 bg-gray-200 w-5/6">
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar/>} >
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
