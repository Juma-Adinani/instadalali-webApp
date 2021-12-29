import { requests, url, utils } from "helpers";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function WishList() {
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
    <div className="liton__wishlist-area mb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping-cart-inner">
              <div className="shoping-cart-table table-responsive">
                <table className="table">
                  <tbody>
                    {data.length > 0 ? (
                      data.map((item) => (
                        <tr>
                          <td className="cart-product-remove">x</td>
                          <td className="cart-product-image">
                            <Link to="/wishlist">
                              <img
                                src={item.listing.post.url}
                                alt={item.listing.post.caption}
                              />
                            </Link>
                          </td>
                          <td className="cart-product-info">
                            <h4 className="go-top">
                              <Link to="/wishlist">
                                {utils.truncate({
                                  text: item.listing.post.caption,
                                  size: 80,
                                })}
                              </Link>
                            </h4>
                          </td>
                          <td className="cart-product-price">
                            1 X{item.listing.price_currency}&nbsp;
                            {utils.formatNumber(item.listing.price)}
                          </td>
                          <td className="cart-product-stock">
                            {item.listing.offer_type}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <div>No wishlist yet.!</div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
