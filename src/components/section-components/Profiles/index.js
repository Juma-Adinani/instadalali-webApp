import React from "react";
import Navbar from "../../global-components/NavbarShop";
import PageHeader from "../../global-components/page-header";
import ProfilesList from "./Profiles";
import CallToActionV1 from "../call-to-action-v1";
import Footer from "../../global-components/footer";

export default function Profiles(props) {
  return (
    <div>
      <Navbar />
      {/* <PageHeader headertitle="Property Agents" subheader="Agent" /> */}
      <ProfilesList />
      <CallToActionV1 />
      <Footer />
    </div>
  );
}
