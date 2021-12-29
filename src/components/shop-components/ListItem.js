import React from "react";
import { Link } from "react-router-dom";
import { utils } from "helpers";

export default function ListItem(props) {
  //   const publicUrl = process.env.PUBLIC_URL + "/";
  const { item, onExpand, onAddWishlist } = props;
 
  return (
    <div className="col-lg-12">
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 houseDetails">
        <div className="product-img go-top">
          {/* <Link to="/product-details"> */}
          <Link to="/Shop">
            <img src={item.post?.url} alt={""} />
          </Link>
        </div>
        <div className="product-info">
          <div className="product-badge-price">
            <div className="product-badge">
              <ul>
                <li className="sale-badg">{item.offer_type}</li>
              </ul>
            </div>
            <div className="product-price">
              <span>
                {item.price_currency}&nbsp;{utils.formatNumber(item.price)}
                {/* <label>/Month</label> */}
              </span>
            </div>
          </div>
          <div className="go-top">
            {utils.truncate({ text: item?.post?.caption, size: 100 })}
          </div>
          <div className="product-img-location go-top">
            <ul>
              <li>
                <p>
                  {!!item.location?.name && <i className="flaticon-pin" />}
                  {item.location?.name}
                </p>
              </li>
            </ul>
          </div>
          <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
            <li>
              <span>{item.bedrooms_count||1} </span>
              {} Bedrooms
            </li>
            <li>
              <span>{item.master_bedrooms_count||0}</span>
              {} Master bedrooms
            </li>
  
            <li>
              <span>{item.min_payment_months_count} </span>
              Rental Months
            </li>
          </ul>
        </div>
        <div className="product-info-bottom">
          <div className="real-estate-agent">
            <div className="ltn__blog-meta">
              <ul>
                <li className="ltn__blog-author go-top">
                  <p>
                    <i className="far fa-user" />
                    {item.post?.owner_profile?.full_name}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-hover-action">
            <ul>
              <li>
                <a
                  href=".#"
                  title="Quick View"
                  data-bs-toggle="modal"
                  data-bs-target="#quick_view_modal"
                  onClick={() => onExpand(item)}
                >
                  <i className="flaticon-expand" />
                </a>
              </li>
              <li>
                <a
                  href=".#"
                  title="Wishlist"
                  data-bs-toggle="modal"
                  data-bs-target="#liton_wishlist_modal"
                  onClick={() => onAddWishlist(item)}
                >
                  <i className="flaticon-heart-1" />
                </a>
              </li>
              {/* <li className="go-top">
                <Link to="/product-details" title="Product Details">
                  <i className="flaticon-add" />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="ltn__blog-meta">
          <ul>
            <li className="ltn__blog-date">
              <i className="far fa-calendar-alt" />
              Posted: {utils.formatDate(item.post?.post_date)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
