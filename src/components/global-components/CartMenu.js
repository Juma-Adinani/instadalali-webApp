import { requests, url, utils } from "helpers";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CartMenu(props) {
  const [data, setData] = useState([]);
  const loggedUser = utils.getUser();

  async function getData(link) {
    try {
      const res = await requests.get(link);
      res.results && setData(res.results);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const link = url.dalali.wishlist+"?src=cart_menu";
    loggedUser && getData(link);
  }, []);

  async function removeItem(item) {
    await requests.delete(
      url.getURL("dalali.wishlist", { item: item, type: "delete" })
    );
    getData(url.dalali.wishlist+"?src=remove_item");
  }

  return (
    <div
      id="ltn__utilize-cart-menu"
      className="ltn__utilize ltn__utilize-cart-menu"
      >
      <div className="ltn__utilize-menu-inner ltn__scrollbar">
        <div className="ltn__utilize-menu-head">
          <span className="ltn__utilize-menu-title">Wishlist</span>
          <button className="ltn__utilize-close">×</button>
        </div>
        <div className="mini-cart-product-area ltn__scrollbar">
          {data?.length > 0 ? (
            data.map((item) => (
              <div className="mini-cart-item clearfix" key={item.id}>
                <div className="mini-cart-img go-top">
                  <Link to={url.routes.get("product", item.listing)}>
                    <img
                      src={item.listing.post.url}
                      alt=""
                    />
                  </Link>
                  <span className="mini-cart-item-delete">
                    <i
                      className="icon-cancel"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to remove from wishlist?"
                          )
                        )
                          removeItem(item);
                      }}
                    />
                  </span>
                </div>
                <div className="mini-cart-info go-top">
                  <h6>
                    <Link to={url.routes.get("product", item.listing)}>
                      {utils.truncate({
                        text: item.listing.post.caption,
                        size: 80,
                      })}
                    </Link>
                  </h6>
                  
                  <span className="mini-cart-quantity">
                    {item.listing.price_currency}&nbsp;
                    {utils.formatNumber(item.listing.price)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div>No wishlist yet..</div>
          )}
        </div>
        <div className="mini-cart-footer">
          <div className="btn-wrapper go-top">
            <Link to={url.routes.wishlist} className="theme-btn-1 btn btn-effect-1">
              View WishList
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

