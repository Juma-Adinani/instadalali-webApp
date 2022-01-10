import React, { useEffect, useState } from "react";
import Navbar from "./global-components/NavbarIntro";
import Banner from "./section-components/banner-v2";
import Aboutv3 from "./section-components/about-v3";
import Video from "./section-components/video-v2";
import Features from "./section-components/features-v1";
import UpComingProduct from "./section-components/upcoming-product-v1";
import ApartmentV2 from "./section-components/apartment-v2";
import ProductSlider from "./section-components/product-slider-v2";
import Availability from "./section-components/availability";
import Neighbour from "./section-components/neighbour";
import Cateogory from "./section-components/category-v2";
// import Testimonial from "./section-components/testimonial-v2";
import Testimonial from "./section-components/testimonial-v1";
import FeaturedListings from "./shop-components/Listings/Featured"

import CallToActionV1 from "./section-components/call-to-action-v1";
import ServiceV1 from "./section-components/service-v1";
import Footer from "./global-components/footer";
import { requests, url, utils } from "helpers";


const Home_V2 = () => {

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true);

  async function fetchData(){
      const res = await requests.get(`${url.dalali.listing}?order_by=id&size=8`)
      setResults(res.results);
      setLoading(false);
  }
  useEffect(()=>{
      fetchData();
  },[])

  if(loading) return null;

  return (
    <div>
      <Navbar />
      <Banner />
      {/* <Aboutv3 />
        <Video />
        <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---"/>
        <UpComingProduct />
        <ApartmentV2 />{/*
        <ProductSlider />
        <Availability />
        <Neighbour />
        <Cateogory />
        <Testimonial />*/}
      <ServiceV1 />
     
      {/* <Cateogory /> */}
      <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />
      <FeaturedListings results={results} />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Home_V2;
