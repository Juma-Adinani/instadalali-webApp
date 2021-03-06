import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "components/section-components/map";
import { requests, url, utils } from "helpers";
import Panorama from "./Panorama"

export default function ListingDetail(props) {
  const { item: selectedItem} = props;
  // create a new variable for the item here so as to fetch an item with more details
  const [item, setItem] = useState(selectedItem);

  useEffect(() => {
    if(!selectedItem) return;
    const link = url.getURL("dalali.listing", {
      type: "detail",
      item: selectedItem,
    }, {add_hits_count:1});
    getItem(link);
  }, [selectedItem]);

  async function getItem(link) {
    try {
      const res = await requests.get(link);
      if (res.id) {
        setItem(res);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const post=item?.post;
  const itemDetails=[
    [
      {title:"Bedrooms", field:'bedrooms_count'},
      {title:"Master Bedrooms", field:'master_bedrooms_count'},
      {title:"Bathrooms", field:'bathrooms_count', default:1},
      {title:"Views", field:'hits_count'},

  ],
    [
      {title:"Has fan", field:'has_fan'},
      {title:"Is Standalone", field:'is_standalone'},
      {title:"Is furnished", field:'is_furnished'},
      {title:"Has heating", field:'has_heating'},
  ],

  ]

  return (
    <div className="ltn__shop-details-area pb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-category">
                    <Link to=".#">{item?.offer_type?.toUpperCase()}</Link>
                  </li>
                  <li className="ltn__blog-date">
                    <i className="far fa-calendar-alt" />
                    {utils.formatDate(post?.post_date)}
                  </li>
                </ul>
              </div>

              <label>
                <span className="ltn__secondary-color">
                  <i className="flaticon-pin" />
                </span>
                {item?.location?.name || "Check Description"}
              </label>
              <h4 className="title-2">Description</h4>
              <div>{item?.post?.caption}</div>
              <h4 className="title-2">Property Detail</h4>
              <div className="property-detail-info-list section-bg-1 clearfix mb-60 d-flex justify-content-center">
                {itemDetails.map((section, i) => (
                  <ul className="w-5y0" key={`section-${i}`}>
                    {section.map((param, j) => (
                      <li key={`${i}-${j}`}>
                        <label>{param.title}:</label>
                        <span>{`${utils.getObject(
                          item,
                          param.field,
                          param.default||"",
                        )}`}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <div className="mt-20" style={{overflow:`hidden`}} >
                <>
                  <h4 className="title-2">Virtual Tours</h4>
                  {item?.virtual_tour_count>0?<Panorama item={item} />:<div>No virtual tours for this listing yet</div>}
                </>

                {true && <>
                  <h4 className="title-2">Location</h4>
                  <div className="property-details-google-map mb-60">
                    <Map item={item} />
                  </div>
                </>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
