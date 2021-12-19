import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "../section-components/map";
import { url, requests } from "helpers";

export default function ExpandItem() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const link = url.dalali.listing;
    getPhotos(link);
  }, []);

  async function getPhotos(link) {
    try {
      const response = await requests.get(link);
      console.log(response);
      setPhotos(photos);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="modal-content">
      <div className="modal-header">
        <button
          type="button"
          className="close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
          {/* <i class="fas fa-times"></i> */}
        </button>
      </div>
      <div className="modal-body">
        <div className="ltn__quick-view-modal-inner">
          <div className="modal-product-item">
            <h3 style={{ color: `#171b2a` }}>House Details</h3>
            <div className="row">
              {/* ltn__blog-item-3-normal */}
              <div className="row  ltn__blog-slider-one-active slick-arrow-1 ">
                {/* Blog Item */}
                {photos &&
                  photos.results.map((detail, index) => {
                    <div className="col-lg-12" key={index}>
                      <div className="ltn__blog-item ltn__blog-item-3">
                        <div className="ltn__blog-img">
                          <Link to="/blog-details">
                            <img src={detail.post.photos.uri} alt="#" />
                          </Link>
                        </div>
                      </div>
                    </div>;
                  })}
              </div>
            </div>
            <div className="modal-product-meta ltn__product-details-menu-1">
              <ul className="d-flex justify-content-between align-items-center">
                <li className="row">
                  <strong>Amenities:</strong>
                  <span className="go-top d-flex flex-direction-row justify-content-around amentiesLinks">
                    <p>Security</p>
                    <p>Hospital</p>
                    <p>School</p>
                    <p>Market</p>
                  </span>
                </li>
                <li style={{ listStyle: `none` }}>
                  <a
                    href="#"
                    className="theme-btn-1 btn btn-effect-1"
                    title="Add to Cart"
                    data-bs-toggle="modal"
                    data-bs-target="#add_to_cart_modal"
                  >
                    <i className="fas fa-shopping-cart" />
                    <span>ADD TO CART</span>
                  </a>
                </li>
              </ul>
            </div>
            <h3 style={{ color: `#171b2a` }}>Location</h3>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
