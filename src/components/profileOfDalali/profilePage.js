import Footer from "components/global-components/footer";
import Navbar from "components/global-components/NavbarShop";
import React from "react";
import ScrollProfileData from "./profileData/scrollProfileData";

function ProfilePage() {
  return (
    <div>
      <Navbar />
      <ScrollProfileData />
      <Footer />
    </div>
  );
}

export default ProfilePage;
