import React from "react";
import Navbar from "../global-components/NavbarShop";
import PageHeader from "../global-components/page-header";
import Faq from "../section-components/faq-v1";
import CallToActionV1 from "../section-components/call-to-action-v1";
import Footer from "../global-components/footer";
import UsersFaq from "./usersFaq";
import DalaliFaq from "./dalaliFaq";
import HomeOwner from "./homeOwner";

const FaqV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Frequently asked questions" subheader="FAQ" />
      <UsersFaq />
      <DalaliFaq />
      <HomeOwner />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default FaqV1;
