import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Map from "components/section-components/map";
import { requests, url } from "helpers";

function ListingDetails() {
  
  const [item, setItem] = useState([]);
 
  async function getDetails(link) {
    try {
      const res = await requests.get(link);
      console.log(res);
      setItem(res.results);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const link = url.getURL("dalali.wishlist", { item: item, type: "detail" });
    getDetails(link);
  }, [item]);

  return (
    <div className="ltn__shop-details-area pb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-category">
                    <Link to="#">Rent</Link>
                  </li>
                  <li className="ltn__blog-date">
                    <i className="far fa-calendar-alt" />
                    May 19, 2021
                  </li>
                </ul>
              </div>

              <label>
                <span className="ltn__secondary-color">
                  <i className="flaticon-pin" />
                </span>
                Belmont Gardens, Chicago
              </label>
              <h4 className="title-2">Description</h4>
              <p>
                Massa tempor nec feugiat nisl pretium. Egestas fringilla
                phasellus faucibus scelerisque eleifend donec Porta nibh
                venenatis cras sed felis eget velit aliquet. Neque volutpat ac
                tincidunt vitae semper quis lectus. Turpis in eu mi bibendum
                neque egestas congue quisque. Sed elementum tempus egestas sed
                sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris
                cursus mattis molestee iaculis at erat pellentesque. Id interdum
                velit laoreet id donec ultrices tincidunt.
              </p>
              <p>
                To the left is the modern kitchen with central island, leading
                through to the unique breakfast family room which feature glass
                walls and doors out onto the garden and access to the separate
                utility room.
              </p>
              <h4 className="title-2">Property Detail</h4>
              <div className="property-detail-info-list section-bg-1 clearfix mb-60 d-flex justify-content-center">
                <ul className="w-5y0">
                  <li>
                    <label>Property ID:</label> <span>HZ29</span>
                  </li>
                  <li>
                    <label>Home Area: </label> <span>120 sqft</span>
                  </li>
                  <li>
                    <label>Rooms:</label> <span>7</span>
                  </li>
                  <li>
                    <label>Baths:</label> <span>2</span>
                  </li>
                  <li>
                    <label>Year built:</label> <span>1992</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <label>Lot Area:</label> <span>HZ29 </span>
                  </li>
                  <li>
                    <label>Lot dimensions:</label> <span>120 sqft</span>
                  </li>
                  <li>
                    <label>Beds:</label> <span>7</span>
                  </li>
                  <li>
                    <label>Price:</label> <span>2</span>
                  </li>
                  <li>
                    <label>Property Status:</label> <span>For Sale</span>
                  </li>
                </ul>
              </div>
              <h4 className="title-2">Location</h4>
              <div className="property-details-google-map mb-60">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListingDetails;
