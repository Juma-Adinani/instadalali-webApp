import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Navbar from "components/global-components/NavbarShop";
import Footer from "components/global-components/footer";
import CallToActonV1 from "components/section-components/call-to-action-v1";
// import { PaginationTable } from "./PaginationTable";
import ColumnsDataTable from "./ColumnsDataTable";

class DalaliListTable extends Component {
  render() {
    return (
      <div style={{overflowX:`hidden`}}>
        <Navbar />
        {/* <PaginationTable /> */}
        <ColumnsDataTable/>
        <CallToActonV1 />
        <Footer />
      </div>
    );
  }
}

export default DalaliListTable;
