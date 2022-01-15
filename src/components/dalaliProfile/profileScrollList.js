import React, { useEffect, useState } from "react";
import { url, requests } from "helpers";
import InfiniteScroll from "react-infinite-scroll-component";
import "./loader.css";
import "./profile.css";
import ProfileDetails from "./profileDetails";

function ProfileScrollList() {
  const [results, setResults] = useState([]);
  const [hasMoreProfile, setHasMoreProfile] = useState(true);
  //   const [loading, setLoading] = useState(true);
  //   const [numberOfPages, setNumberOfPages] = useState(0);
  //   const [profilePerPage, setProfilePerPage] = useState(6);

  const endpoint = url.profile + "?include=listings_count";

  async function getProfile() {
    try {
      const res = await requests.get(endpoint);
      console.log(res.results);
      setResults(res.results);
      //   setNumberOfPages(res.total_pages);
    } catch (err) {
      console.log("There is an error: ", err);
    }
  }
  useEffect(async () => {
    // setLoading(loading);
    await getProfile();
    // setLoading(!loading);
  }, []);

  const getMoreProfile = () => {
    setHasMoreProfile(false);
    return;
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ background: `#f0f2f1` }}
    >
      <div className="clearfix container">
        <InfiniteScroll
          style={{ overflowX: `hidden` }}
          dataLength={results.length}
          next={() => getMoreProfile()}
          hasMore={hasMoreProfile}
          loader={
            <div className="d-flex justify-content-center w-100 mt-30 mb-20">
              <div class="loader"></div>
            </div>
          }
          height={800}
          endMessage={
            <p className="text-center mt-30">
              <b>..No more profiles..</b>
            </p>
          }
        >
          <div className="row">
            {results.map((detail) => (
              <div className="col-md-6 animated fadeIn" key={detail.id}>
                <ProfileDetails
                  fullname={detail.full_name}
                  contact={detail.biography}
                  image={detail.profile_pic_url}
                  category={detail.business_category_name}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default ProfileScrollList;
