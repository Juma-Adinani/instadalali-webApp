import React from "react";
// import "./profile.css";
import { utils } from "helpers";

function ProfileData(props) {
    const {profile} = props;
  return (
    <div className="card mt-20" style={{boxShadow:`0 0 1px #338a5d`}}>
      <div className="card-body">
        <div className="avatarImage">
          <img src={profile.profile_pic_url} className="card-img-top" alt="" />
        </div>
        <h5 className="card-title">{profile.full_name}</h5>
        <p className="card-text">
          {profile.business_category_name}
          <br />
          <span className="phone">
            {utils.truncate({ text: profile.biography, size: 45 })}
          </span>
        </p>
      </div>
    </div>
  );
}
export default ProfileData;
