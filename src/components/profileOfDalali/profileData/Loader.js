import React from "react";

function Loader() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-success m-20" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
