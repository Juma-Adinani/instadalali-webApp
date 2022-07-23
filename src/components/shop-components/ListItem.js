import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { utils, url } from "helpers";
import ReadMoreReact from "read-more-react";
import { useHistory } from "react-router-dom";

export default function ListItem(props) {
  //   const publicUrl = process.env.PUBLIC_URL + "/";
  const { item, onExpand, onAddWishlist } = props;
  // const [item, setItem] = useState(_item)
  const history = useHistory();
  const viewItem = () => {
    //url.routes.get("product", item)
    const pathname = url.routes.get("product", item);
    // console.log("pathname", pathname);
    history.replace({ pathname });
  };

  return (
    <div className="col-lg-12">
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 houseDetails">
        <div className="product-img go-top">
          <Link to={url.routes.get("product", item)}>
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
            <ReadMoreReact
              text={item?.post?.caption || 'No caption'}
              min={80}
              ideal={100}
              max={200}
              readMoreText="read more"
            />
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
              <span>{item.bedrooms_count || 1} </span>
              { } Bedrooms
            </li>
            <li>
              <span>{item.master_bedrooms_count || 0}</span>
              { } Master bedrooms
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
                  <Link to={url.routes.get("profile", item.post?.owner_profile)}>
                    <i className="far fa-user" />
                    {item.post?.owner_profile?.full_name}
                  </Link>
                </li>
                <li className="ltn__blog-date">
                  <i className="far fa-calendar-alt" />
                  {utils.formatDate(item.post?.post_date, "lll")}
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
                  title="wishlist"
                  data-bs-toggle="modal"
                  data-bs-target="#liton_wishlist_modal"
                  onClick={() => onAddWishlist(item)}
                >
                  <i className="flaticon-heart-1" />
                </a>
              </li>
              {/* <li className="go-top">
                <Link
                  to={url.routes.get("product", item)}
                  title="Product Details"
                >
                  <i className="flaticon-add" />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
