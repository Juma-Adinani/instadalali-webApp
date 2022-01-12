import React from "react";
import Navbar from "components/global-components/NavbarShop";
import Footer from "components/global-components/footer";
import CallToActonV1 from "components/section-components/call-to-action-v1";
import ColumnsDataTable from "./ColumnsDataTable";

function DalaliListTable() {
  return (
    <div style={{ overflowX: `hidden` }}>
      <Navbar />
      <ColumnsDataTable />
      <CallToActonV1 />
      <Footer />
    </div>
  );
}

export default DalaliListTable;
