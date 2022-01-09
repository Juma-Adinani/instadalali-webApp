import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "../section-components/map";
import { url, requests } from "helpers";

export default function ExpandItem(props) {
  const { item: selectedItem,  onExpand, onAddWishlist } = props;
  // create a new variable for the item here so as to fetch an item with more details
  const [item, setItem] = useState(selectedItem);

  useEffect(() => {
    if(!selectedItem) return;
    const link = url.getURL("dalali.listing", {
      type: "detail",
      item: selectedItem,
    }, {add_hits_count:1});
    getItem(link);
  }, [selectedItem]);

  async function getItem(link) {
    try {
      const res = await requests.get(link);
      if (res.id) {
        setItem(res);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="ltn__modal-area ltn__quick-view-modal-area">
      <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
        <div className="modal-dialog modal-lg" role="document">
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
                  <h3 style={{ color: `#171b2a` }}>Property Details</h3>
                  <div className="row d-flex justify-content-center w-100">
                    {/* ltn__blog-item-3-normal */}
                    <div className="row  ltn__blog-slider-one-active slick-arrow-1 ">
                      {/* Blog Item */}
                      {item &&
                        item.post.photos.map((photo, index) => (
                          <div className="col-lg-12" key={index}>
                            <div className="ltn__blog-item ltn__blog-item-3">
                              <div className="ltn__blog-img">
                                <Link to="/Shop">
                                  <img src={photo.uri} alt="#" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="modal-product-meta ltn__product-details-menu-1">
                    <ul className="d-flex justify-content-between align-items-start flex-column">
                      <li className="row">
                        {/* <strong>Amenities:</strong> */}
                        <h3 style={{ color: `#171b2a` }}>Description</h3>
                        <span className="go-top d-flex flex-direction-row justify-content-around amentiesLinks">
                          {/* <p>Security</p>
                          <p>Hospital</p>
                          <p>School</p>
                          <p>Market</p>
                          <p>Description</p> */}
                          <p>{item?.post?.caption}</p>
                        </span>
                      </li>
                      <li style={{ listStyle: `none` }}>
                        <div
                          className="theme-btn-1 btn btn-effect-1"
                          title="Add to Cart"
                          data-bs-toggle="modal"
                          // data-bs-target="#add_to_cart_modal"
                          data-bs-target="#liton_wishlist_modal"
                          onClick={() => onAddWishlist(item)}
                        >
                          <span>Add to WishList </span><i className="fas fa-heart" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h3 style={{ color: `#171b2a` }}>Map Location</h3>
                  <Map  item={item} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
