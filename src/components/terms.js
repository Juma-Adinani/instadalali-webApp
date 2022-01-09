import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Terms from "./section-components/terms-v1";
import Footer from "./global-components/footer";

export default function TermsV1(props){
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Terms & Conditions" subheader="Terms of Use" />
      <Terms />
      <Footer />
    </div>
  );
};

