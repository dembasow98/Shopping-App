import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
//import Footer from "./components/footer";
import Login from "./components/login";
import Register from "./components/register";
import Basket from "./components/basket";
import View from "./components/view";
import { useSelector } from "react-redux";


function App() {
  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  
  
  return (
    <div className="SCREEN flex w-full min-h-screen h-full dark:bg-gray-500 place-content-center">
      <div className="CONTAINER dark:bg-gray-800 bg-gray-200 w-full">
        <BrowserRouter>
          <Routes>
            {
              isLoggedIn ? (
                <Route path="/" element={<Navbar isLoggedIn = {isLoggedIn}/>} >
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="services" element={<Services />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="login" element={<Home />} />
                  <Route path="basket" element={<Basket />} />
                  <Route path="view:id" element={<View />} />
                </Route>
              ):(
                <Route path="/" element={<Navbar/>} >
                  <Route index element={<Login />} />
                  <Route path="about" element={<Login />} />
                  <Route path="services" element={<Login />} />
                  <Route path="contact" element={<Login />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="basket" element={<Login />} />
                </Route>
              )
            }
            
           
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );

}

export default App;
