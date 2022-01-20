import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class FeaturesV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    let customClass = this.props.customClass ? this.props.customClass : "";

    return (
      <div className={customClass}>
        <div className="container mb-50"z>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  This is awesome
                </h6>
                {/* <h1 className="section-title">The Power</h1> */}
              </div>
            </div>
          </div>
          <div className="row ltn__custom-gutter--- justify-content-center go-top">
            <div className="col-12">
              <div className="ltn__feature-item  text-center bg-white">
                <div className="ltn__feature-icon">
                  <img src={publicUrl + "assets/img/rocket.png"} alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <h1>Experience the power of AI and visualization</h1>
                  </h3>
                  <p style={{ fontSize: `25px` }}>
                    Using All-in-one&nbsp;
                    <b style={{ color: `#338a5d` }}>app</b>&nbsp;when shopping
                    for your next home.
                  </p>
                  <div className="special-link">
                    <a
                      href={`https://onelink.to/instadalali`}
                      style={{ borderRadius: `200px` }}
                    >
                      Get Started Free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesV1;
