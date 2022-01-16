import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ServiceV5 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__service-area section-bg-1 pt-115 pb-70 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Our Services
                </h6>
                <h1 className="section-title">What We Offer</h1>
              </div>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    {/* <i className="flaticon-house" /> */}
                    <img
                      src={publicUrl + "assets/img/service/tour.png"}
                      alt="3D virtual tour"
                    />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">3D Virtual Tour</Link>
                  </h3>
                  <p>
                    3D virtual tours within the App or using VR headset by
                    paying a visit to our office or agents
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    {/* <i className="flaticon-operator" /> */}
                    <img
                      src={publicUrl + "assets/img/service/nearbyPOI.png"}
                      alt="Nearby POI"
                    />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Nearby POI & Services</Link>
                  </h3>
                  <p>
                    To help you make a decision buying or renting a property
                    based on location, all the listings have nearby POI like
                    schools, tourism, highway and cafes
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    {/* <i className="flaticon-mortgage" /> */}
                    <img
                      src={publicUrl + "assets/img/service/imageSearch.png"}
                      alt=""
                    />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Image Search</Link>
                  </h3>
                  <p>
                    Image search makes serching easy by letting you upload a
                    photo of any building and helps you identify whether it is
                    available for sale or rent. It also goves a list of similar
                    things
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    {/* <i className="flaticon-house-1" /> */}
                    <img
                      src={publicUrl + "assets/img/service/filter.png"}
                      alt="Filter & Sorting"
                    />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Filter & Sort listings</Link>
                  </h3>
                  <p>
                    Filter listings per location, real estate agent, and
                    amenties like electricity, Wi-Fi, Water, Heating system as
                    well as sort listing per price, availability date and
                    location
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-3" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Home Selling</Link>
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-official-documents" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/service-details">Escrow Services</Link>
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceV5;
