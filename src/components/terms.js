import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Terms from "./section-components/terms-v1";
import Counter from "./section-components/counter-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

const TermsV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Terms & Conditions" subheader="Terms of Use" />
      <Terms />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default TermsV1;
