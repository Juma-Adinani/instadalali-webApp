import { requests, url } from "helpers";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import Message from "./message";
import "./profile.css";
import ProfileData from "./profileData";
import SearchProfile from "./searchProfile";

function ScrollProfileData() {
  const [filter, setFilter] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [hasMoreProfile, setHasMoreProfile] = useState(true);

  const endpoint = url.profile + "?include=listings_count";
  useEffect(() => {
    async function getProfiiles() {
      try {
        const res = await requests.get(endpoint);
        setProfiles(res.results);
      } catch (e) {
        console.log(e);
      }
    }
    getProfiiles();
  }, []);

  const getMoreProfile = () => {
    setHasMoreProfile(false);
  };

  // *****************************
  // filter function
  const searchProfile = (e) => {
    setFilter(e.target.value);
  };
  console.warn(filter);
  let profileSearch = profiles.filter((profile) => {
    return Object.values(profile)
      .toString()
      .toLowerCase()
      .includes(filter.toString().toLowerCase());
  });

  return (
    <div>
      <SearchProfile filter={filter} search={searchProfile.bind(this)} />
      <div className="container">
        <InfiniteScroll
          dataLength={profiles.length}
          next={getMoreProfile}
          hasMore={hasMoreProfile}
          loader={<Loader />}
          endMessage={<Message />}
        >
          <div className="row">
            {profileSearch.map((profile, index) => (
              <div className="col-6 animated fadeIn" key={index}>
                <ProfileData profile={profile} />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default ScrollProfileData;
