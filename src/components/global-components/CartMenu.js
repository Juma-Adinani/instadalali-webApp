import { requests, url, utils } from "helpers";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CartMenu() {
  const [data, setData] = useState([]);

  async function getData(link) {
    try {
      const res = await requests.get(link);
      console.log("Hello", res.results);
      setData(res.results);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const link = url.dalali.wishlist;
    getData(link);
  }, []);

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
          {data.length > 0 ? (
            data.map((item) => (
              <div className="mini-cart-item clearfix" key={item.id}>
                <div className="mini-cart-img go-top">
                  <Link to="/Shop">
                    <img
                      // src={publicUrl + "assets/img/product/1.png"}
                      src={item.listing.post.url}
                      alt="Image"
                    />
                  </Link>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info go-top">
                  <h6>
                    {/* <Link to="/Shop">Wheel Bearing Retainer</Link> */}
                    <Link to="/Shop">
                      {utils.truncate({
                        text: item.listing.post.caption,
                        size: 80,
                      })}
                    </Link>
                  </h6>
                  {/* <span className="mini-cart-quantity">1 x $65.00</span> */}
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
            <Link to="/wishlist" className="theme-btn-1 btn btn-effect-1">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartMenu;
