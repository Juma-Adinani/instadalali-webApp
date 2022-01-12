import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function TestimonialV2() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  return (
    <div
      className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-65"
      data-bs-bg={publicUrl + "assets/img/bg/23.jpg"}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center---">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">
                Client,s Testimonial
              </h6>
              <h1 className="section-title white-color">
                See What,s Our Client <br />
                Says About Us
              </h1>
            </div>
          </div>
        </div>
        <div className="row ltn__testimonial-slider-6-active slick-arrow-3">
          <div className="col-lg-4">
            <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
              <div className="ltn__testimoni-info col-lg-12 d-flex justify-content-center">
                <img
                  width={300}
                  height={300}
                  src={publicUrl + "assets/img/testimonial/1.jpg"}
                  alt="#"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
              <div className="ltn__testimoni-info col-lg-12 d-flex justify-content-center">
                <img
                  width={300}
                  height={300}
                  src={publicUrl + "assets/img/testimonial/1.jpg"}
                  alt="#"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
              <div className="ltn__testimoni-info col-lg-12 d-flex justify-content-center">
                <img
                  width={300}
                  height={300}
                  src={publicUrl + "assets/img/testimonial/1.jpg"}
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialV2;
