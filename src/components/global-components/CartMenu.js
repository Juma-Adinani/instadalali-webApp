import { requests, url, utils } from "helpers";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CartMenu() {
  let publicUrl = process.env.PUBLIC_URL + "/";
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
          {data.map((item) => (
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img go-top">
                <Link to="/product-details" key={item.id}>
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
                  {/* <Link to="/product-details">Wheel Bearing Retainer</Link> */}
                  <Link to="/product-details">
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
          ))}
        </div>
        <div className="mini-cart-footer">
          {/* <div className="mini-cart-sub-total">
            <h5>
              Subtotal: <span>$310.00</span>
            </h5>
          </div> */}
          <div className="btn-wrapper go-top">
            <Link to="/cart" className="theme-btn-1 btn btn-effect-1">
              View 
            </Link>
            {/* <Link to="/cart" className="theme-btn-2 btn btn-effect-2">
              Checkout
            </Link> */}
          </div>
          {/* <p>Free Shipping on All Orders Over $100!</p> */}
        </div>
      </div>
    </div>
  );
}

export default CartMenu;
