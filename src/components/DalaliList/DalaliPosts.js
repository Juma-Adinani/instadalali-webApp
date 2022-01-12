import React from "react";
import ProductSliderV2 from "components/section-components/product-slider-v2";
import Navbar from "components/global-components/NavbarShop";
import Footer from "components/global-components/footer";
import CallToActonV1 from "components/section-components/call-to-action-v1";

export const DalaliPosts = () => {
  return (
    <>
      <Navbar />
      <ProductSliderV2 />
      <CallToActonV1 />
      <Footer />
    </>
  );
};
