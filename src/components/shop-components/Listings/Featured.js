import React from "react";
import ListItemVertical from "./ListItemVertical";

export default function FeaturedListings(props){
    let customClass = props.customClass ? props.customClass : "";
    let sectionClass = props.sectionClass ? props.sectionClass : "";
    const {results}=props;

    return (
      <div
        className={"ltn__blog-area pt-115--- pb-70 go-top" + sectionClass}
        style={{
          background: `#f2f3f4
`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6
                  className={
                    "section-subtitle section-subtitle-2 ltn__secondary-color mt-50" +
                    customClass
                  }
                >
                  Latest Listings
                </h6>
                {/* <h1 className="section-title">Leatest News Feeds</h1> */}
              </div>
            </div>
          </div>

          <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
            {results.map((item) => (
              <ListItemVertical item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    );
}

