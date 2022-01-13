import React, { useEffect, useState } from "react";
import "./profile.css";
import "./loader.css";
import { url, requests, utils } from "helpers";

function ProfileList() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maxProfiles, setMaxProfiles] = useState(6); //-----> idadi ya profile kwa kila page
  const [page, setPage] = useState(0); //---> jumla ya profiles, available profiles...
  const endpoint = url.profile + "?include=listings_count";

  async function getProfile() {
    try {
      const res = await requests.get(endpoint);
      console.log(res.results);
      setResults(res.results);
      setPage(res.total_pages);
    } catch (err) {
      console.log("There is an error: ", err);
    }
  }
  useEffect(async () => {
    setLoading(loading);
    await getProfile();
    setLoading(!loading);
  }, []);

  if (results.length === 0 && !loading) {
    return (
      <div className="text-center" style={{ color: `#338a5d` }}>
        Check your internet connection/ no data available..
      </div>
    );
  }

  const loadMoreProfiles = () => {
    setMaxProfiles((viewProfile) => viewProfile + 3);
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ background: `#f0f2f1` }}
    >
      <div className="clearfix mt-40 container">
        {loading && (
          <div className="d-flex justify-content-center w-100 mt-30 mb-20">
            <div class="loader"></div>
          </div>
        )}
        <div className="row">
          {results.slice(0, maxProfiles).map((data) => (
            <div className="col-md-6 animated fadeIn" key={data.id}>
              <div className="card mt-20">
                <div className="card-body">
                  <div className="avatarImage">
                    <img
                      src={data.profile_pic_url}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">{data.full_name}</h5>
                  <p className="card-text">
                    {data.business_category_name}
                    <br />
                    <span className="phone">
                      {utils.truncate({ text: data.biography, size: 45 })}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {page > maxProfiles ? (
          <div className="d-flex justify-content-center mb-40 mt-30">
            <button
              className="btn btn-effect-3 btn-white"
              style={{
                background: `#338a5d`,
                color: `white`,
                fontSize: `smaller`,
              }}
              onClick={() => {
                loadMoreProfiles();
              }}
            >
              View More dalalis ...
            </button>
          </div>
        ) : (
          <div className="mt-40" style={{ color: `#f0f2f1` }}>
            No more dalalis...
          </div>
        )}
      </div>
    </div>
  );
}
export default ProfileList;
