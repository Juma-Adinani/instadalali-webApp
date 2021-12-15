import React, { Component, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Sidebar from "./shop-sidebar";
import Map from "../section-components/map";
import {url, requests} from  "helpers";

function ShopGridV1(props){
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  let publicUrl = process.env.PUBLIC_URL + "/";

  useEffect(()=>{
    const fetchProfile=async()=>{
      try{
      const res=await requests.get(url.getURL("profile", {item:{id:35}, type:'detail'}));
      console.log("profile 35", res);
      setLoading(false)
      }catch(error){
        console.warn("Error happened ", JSON.stringify(error, null, 3))
      }
    }
    fetchProfile();
  }, [props])

    return (
      <div>
        <div className="ltn__product-area ltn__product-gutter">
          <div className="container">
            <div className="row">
              <div className="col-lg-8  mb-100">
                <div className="ltn__shop-options">
                  <ul className="justify-content-start">
                    <li className="d-none">
                      <div className="showing-product-number text-right">
                        <span>Showing 1–12 of 18 results</span>
                      </div>
                    </li>
                    <li>
                      <div className="short-by text-center">
                        <select className="nice-select">
                          <option>Default Sorting</option>

                          <option>Sort by popularity</option>
                          <option>Sort by new arrivals</option>
                          <option>Sort by price: low to high</option>
                          <option>Sort by price: high to low</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div className="short-by text-center">
                        <select className="nice-select">
                          <option>Per Page: 3</option>
                          <option>Per Page: 5</option>
                          <option>Per Page: 7</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  {/* **************************************
					House for rent and for sale (House details)
				************************************** */}
                  {/* <div className="tab-pane fade" id="liton_product_list"> */}
                  <div
                    className="tab-pane fade active show"
                    id="liton_product_grid"
                  >
                    <div className="ltn__product-tab-content-inner ltn__product-list-view">
                      <div className="row">
                        <div className="col-lg-12">
                          {/* Search Widget */}
                          <div className="ltn__search-widget mb-30">
                            <form action="#">
                              <input
                                type="text"
                                name="search"
                                placeholder="Search your keyword..."
                              />
                              <button type="submit">
                                <i className="fas fa-search" />
                              </button>
                            </form>
                          </div>
                        </div>
                        {/* ltn__product-item  in horizontal view (House details at large)*/}
                        <div className="col-lg-12">
                          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 houseDetails">
                            <div className="product-img go-top">
                              {/* <Link to="/product-details"> */}
                              <Link to="/shop">
                                <img
                                  src={
                                    publicUrl + "assets/img/houses/house3.jpg"
                                  }
                                  alt="#"
                                />
                              </Link>
                            </div>
                            <div className="product-info">
                              <div className="product-badge-price">
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badg">For Rent</li>
                                  </ul>
                                </div>
                                <div className="product-price">
                                  <span>
                                    TZS.200,000<label>/Month</label>
                                  </span>
                                </div>
                              </div>
                              <h2 className="product-title go-top">
                                New Apartment Nice View
                              </h2>
                              <div className="product-img-location go-top">
                                <ul>
                                  <li>
                                    <p>
                                      <i className="flaticon-pin" /> Kimara
                                      Temboni
                                    </p>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>3 </span>
                                  Bed
                                </li>
                                <li>
                                  <span>2 </span>
                                  Bath
                                </li>
                                <li>
                                  <span>3450 </span>
                                  Square Ft
                                </li>
                              </ul>
                            </div>
                            <div className="product-info-bottom">
                              <div className="real-estate-agent">
                                <div className="ltn__blog-meta">
                                  <ul>
                                    <li className="ltn__blog-author go-top">
                                      <p>
                                        <i className="far fa-user" />
                                        by: Dalali Rama Ubungo Riverside
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      title="Quick View"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quick_view_modal"
                                    >
                                      <i className="flaticon-expand" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      title="Wishlist"
                                      data-bs-toggle="modal"
                                      data-bs-target="#liton_wishlist_modal"
                                    >
                                      <i className="flaticon-heart-1" />
                                    </a>
                                  </li>
                                  <li className="go-top">
                                    <Link
                                      to="/product-details"
                                      title="Product Details"
                                    >
                                      <i className="flaticon-add" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="ltn__blog-meta">
                              <ul>
                                <li className="ltn__blog-date">
                                  <i className="far fa-calendar-alt" />
                                  posted: May 19, 2021
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* **************************************
					House for rent and for sale
				************************************** */}

                <div className="ltn__pagination-area text-center">
                  <div className="ltn__pagination">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fas fa-angle-double-left" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">1</Link>
                      </li>
                      <li className="active">
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">3</Link>
                      </li>
                      <li>
                        <Link to="#">...</Link>
                      </li>
                      <li>
                        <Link to="#">10</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fas fa-angle-double-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>

        {/* *****************************
				For love emoji
		******************************* */}

        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
          <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-12">
                          <div className="modal-product-img">
                            <img
                              src={publicUrl + "assets/img/houses/house1.jpg"}
                              alt="#"
                            />
                          </div>
                          <div className="modal-product-info go-top">
                            <h5>
                              <Link to="/product-details">
                                Brake Conversion Kit
                              </Link>
                            </h5>
                            <p className="added-cart">
                              <i className="fa fa-check-circle" /> Successfully
                              added to your Wishlist
                            </p>
                            <div className="btn-wrapper">
                              <Link
                                to="/wishlist"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                View Wishlist
                              </Link>
                            </div>
                          </div>
                          {/* additional-info */}
                          <div className="additional-info d-none">
                            <p>
                              We want to give you <b>10% discount</b> for your
                              first order, <br /> Use discount code at checkout
                            </p>
                            <div className="payment-method">
                              <img
                                src={publicUrl + "assets/img/icons/payment.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *****************************
				end For love emoji
		******************************* */}

        {/* *****************************
				start expand emoji
		******************************* */}
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
                      <h3 style={{ color: `#171b2a` }}>House Details</h3>
                      <div className="row">
                        {/* ltn__blog-item-3-normal */}
                        <div className="row  ltn__blog-slider-one-active slick-arrow-1 ">
                          {/* Blog Item */}
                          <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                              <div className="ltn__blog-img">
                                <Link to="/blog-details">
                                  <img
                                    src={
                                      publicUrl +
                                      "assets/img/houses/house17.jpg"
                                    }
                                    alt="#"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* Blog Item */}
                          <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                              <div className="ltn__blog-img">
                                <Link to="/blog-details">
                                  <img
                                    src={
                                      publicUrl +
                                      "assets/img/houses/house20.jpg"
                                    }
                                    alt="#"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* Blog Item */}
                          <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                              <div className="ltn__blog-img">
                                <Link to="/blog-details">
                                  <img
                                    src={
                                      publicUrl +
                                      "assets/img/houses/house19.jpg"
                                    }
                                    alt="#"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* Blog Item */}
                          <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                              <div className="ltn__blog-img">
                                <Link to="/blog-details">
                                  <img
                                    src={
                                      publicUrl +
                                      "assets/img/houses/house13.jpg"
                                    }
                                    alt="#"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* Blog Item */}
                          <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                              <div className="ltn__blog-img">
                                <Link to="/blog-details">
                                  <img
                                    src={
                                      publicUrl +
                                      "assets/img/houses/house17.jpg"
                                    }
                                    alt="#"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
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
            </div>
          </div>
        </div>

        {/* *****************************
				end expand emoji
		******************************* */}

        {/* *****************************
				start add to cart
		******************************* */}
        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
          <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-12">
                          <div className="modal-product-img">
                            <img
                              src={publicUrl + "assets/img/product/1.png"}
                              alt="#"
                            />
                          </div>
                          <div className="modal-product-info go-top">
                            <h5 className="go-top">
                              <Link to="/product-details">
                                Brake Conversion Kit
                              </Link>
                            </h5>
                            <p className="added-cart">
                              <i className="fa fa-check-circle" />
                              Successfully added to your Cart
                            </p>
                            <div className="btn-wrapper">
                              <Link
                                to="/cart"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                View Cart
                              </Link>
                              <Link
                                to="/checkout"
                                className="theme-btn-2 btn btn-effect-2"
                              >
                                Checkout
                              </Link>
                            </div>
                          </div>
                          {/* additional-info */}
                          <div className="additional-info d-none">
                            <p>
                              We want to give you <b>10% discount</b> for your
                              first order, <br /> Use discount code at checkout
                            </p>
                            <div className="payment-method">
                              <img
                                src={publicUrl + "assets/img/icons/payment.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* *****************************
				end add to cart
		******************************* */}
      </div>
    );
  
}

export default ShopGridV1;
