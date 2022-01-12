import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url, requests, utils } from "helpers";

function ProductSliderV2() {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div
      className="ltn__search-by-place-area before-bg-top bg-image-top--- pt-115 pb-70"
      data-bs-bg={publicUrl + "assets/img/bg/20.jpg"}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center---">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                Posted by dalali Ubungo
              </h6>
              {/* <h1 className="section-title">
                Find Your Dream House <br />
                Search By Area
              </h1> */}
            </div>
          </div>
        </div>
        <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                {/* <Link to={url.routes.get("product", item.listing)}> */}
                <Link to={url.routes.listing}>
                  <img src={publicUrl + "assets/img/product-3/1.jpg"} alt="#" />
                </Link>
                <div className="search-by-place-badge">
                  <ul>
                    <li>6 properties (idadi ya propeties, picha inside)</li>
                  </ul>
                </div>
              </div>
              <div className="search-by-place-info">
                <h6>
                  {/* <Link to={url.routes.get("product", item.listing)}> */}
                  <Link to={url.routes.listing}>
                    Mbagala Rangi 3 (location by name)
                  </Link>
                </h6>
                <h6>
                  {/* <Link to={url.routes.get("product", item.listing)}> */}
                  <Link to={url.routes.listing}>posted:&nbsp;12/01/2022</Link>
                </h6>
                <div className="search-by-place-btn">
                  {/* <Link to={url.routes.get("product", item.listing)}> */}
                  <Link to={url.routes.listing}>
                    View Property <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSliderV2;
