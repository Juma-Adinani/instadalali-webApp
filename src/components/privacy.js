import React from "react";
import Navbar from "./global-components/NavbarShop";
import PageHeader from "./global-components/page-header";
import Privacy from "./section-components/privacy-v1";
import Footer from "./global-components/footer";

export default function PrivacyView(props){
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Privacy Policy" subheader="Privacy" />
      <Privacy />
      <Footer />
    </div>
  );
};
