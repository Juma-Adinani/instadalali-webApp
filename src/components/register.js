import React from "react";
import Footer from "./global-components/footer";
import Navbar from "./global-components/navbar";
import RegisterView from "./section-components/register";

export default function Register(props){
  return (
    <div>
      <Navbar/>
      <RegisterView />
      <Footer/>
    </div>
  );
};

