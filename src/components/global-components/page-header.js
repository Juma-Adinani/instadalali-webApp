import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "helpers";

export default function PageHeader(props) {
  let HeaderTitle = props.headertitle;
  let publicUrl = process.env.PUBLIC_URL + "/";
  let Subheader = props?.subheader || HeaderTitle;
  let CustomClass = props.customclass || "";
  const { parentPage = { name: "Home", to: "/" } } = props;

  return (
    <div
      //ltn__breadcrumb-area
      className={"text-left bg-overlay-white-30 bg-image " + CustomClass}
      data-bs-bg={publicUrl + "assets/img/bg/14.jpg"}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__breadcrumb-inner">
              <h1 className="page-title">{HeaderTitle}</h1>
              <div className="ltn__breadcrumb-list">
                <ul>
                  <li>
                    <Link to={parentPage.to}>
                      <span className="ltn__secondary-color">
                        <i className="fas fa-home" />
                      </span>{" "}
                      {parentPage.name}
                    </Link>
                  </li>
                  <li>{Subheader}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
