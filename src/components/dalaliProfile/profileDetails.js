import React from "react";
import "./profile.css";
import {utils } from "helpers";

function ProfileDetails(props) {
  return (
    <div className="card mt-20">
      <div className="card-body">
        <div className="avatarImage">
          <img src={props.image} className="card-img-top" alt="" />
        </div>
        <h5 className="card-title">{props.fullname}</h5>
        <p className="card-text">
          {props.category}
          <br />
          <span className="phone">
            {utils.truncate({ text: props.contact, size: 45 })}
          </span>
        </p>
      </div>
    </div>
  )
};
export default ProfileDetails;