import Footer from "components/global-components/footer";
import Navbar from "components/global-components/NavbarShop";
import React from "react";
import ProfileScrollList from "./profileScrollList";

function ProfilePage() {
  return (
    <div>
      <Navbar />
      <ProfileScrollList />
      <Footer />
    </div>
  );
}

export default ProfilePage;
