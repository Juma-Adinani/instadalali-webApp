import React from "react";

export default function SearchProfile(props) {
  return (
    <div>
      <section className="py-4 container-fluid">
        <div className="row justify-content-center">
          <div className="mb-3 col-6 mx-auto text-center">
            <input
              placeholder="Search..."
              type="text"
              className="form-control"
              value={props.filter}
              onChange={props.search}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
