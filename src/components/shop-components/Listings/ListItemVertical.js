import React from "react";
import { url, utils } from "helpers";
import { Link } from "react-router-dom";

export default function ListItemVertical(props) {
  const { item } = props;
  return (
    <div className="col-lg-12">
      <div key={item.id} className="ltn__blog-item ltn__blog-item-3">
        <div className="ltn__blog-img" style={{ width: 400, height: 400 }}>
          <Link to={url.routes.get("listing", item)}>
            <img src={item?.post?.url} alt="#" />
          </Link>
        </div>
        <div className="ltn__blog-brief">
          <div className="ltn__blog-meta">
            <ul>
              <li className="ltn__blog-author">
                <Link to={`${url.routes.listings}?post__owner_profile__id=${item?.post?.owner_profile?.id}`}>
                  <i className="far fa-user" />
                  {item?.post?.owner_profile.full_name}
                </Link>
              </li>
              <li className="ltn__blog-tags">
                <Link to={`${url.routes.listings}?offer_type=${item?.offer_type}`}>
                  <i className="fas fa-tags" />
                  {item?.offer_type?.toUpperCase()}
                </Link>

                {item.is_standalone && false && <Link to={`${url.routes.listings}?is_standalone=true`}>
                  <i className="fas fa-tags" />
                  Standalone
                </Link>}

              </li>
            </ul>
          </div>
          <p>
            <Link to={url.routes.get("listing", item)}>
              {utils.truncate({ text: item?.post?.caption, size: 64 })}
            </Link>
          </p>
          <div className="ltn__blog-meta-btn">
            <div className="ltn__blog-meta">
              <ul>
                <li className="ltn__blog-date">
                  <i className="far fa-calendar-alt" />
                  {utils.formatDate(item?.post?.post_date)}
                </li>
              </ul>
            </div>
            <div className="ltn__blog-btn">
              <Link to={url.routes.get("listing", item)}>{!!item?.price ? `${item?.price_currency} ${utils.toHR(item?.price)}` : `Read more`}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

