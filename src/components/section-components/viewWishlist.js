import { requests, url, utils } from "helpers";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "components/Loading";

function WishList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loggedUser = utils.getUser()
  async function getData(link) {
    try {
      const res = await requests.get(link);
      setData(res.results);
    } catch (e) {
      console.log(e);
    }
    setLoading(false)
  }

  useEffect(() => {
    const link = url.dalali.wishlist;
    loggedUser && getData(link);
  }, []);

  async function removeItem(item) {
    await requests.delete(
      url.getURL("dalali.wishlist", { item: item, type: "delete" })
    );
    getData(url.dalali.wishlist);
  }

  return (
    <div className="liton__wishlist-area mb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {loading && <Loading count={6} />}
            <div className="shoping-cart-inner">
              <div className="shoping-cart-table table-responsive">
                <table className="table">
                  <tbody>
                    {data?.length > 0 ? (
                      data.map((item) => (
                        <tr>
                          <td
                            className="cart-product-remove"
                            onClick={() => {
                                if (
                                  window.confirm(
                                    "Are you sure you want to remove from wishlist?"
                                  )
                                )
                                  removeItem(item);
                            }}
                          >
                            x
                          </td>
                          <td className="cart-product-image">
                            <Link to={url.routes.get("product", item.listing)}>
                              <img
                                src={item.listing.post.url}
                                alt={`item-${item?.id}`}
                              />
                            </Link>
                          </td>
                          <td className="cart-product-info">
                            <div className="go-top">
                              <Link to={url.routes.get("product", item.listing)}>
                                {utils.truncate({
                                  text: item.listing.post.caption,
                                  size: 80,
                                })}
                              </Link>
                            </div>
                          </td>
                          <td className="cart-product-price">
                            {item.listing.price_currency}&nbsp;
                            {utils.formatNumber(item.listing.price)}
                          </td>
                          <td className="cart-product-stock">
                            {item.listing.offer_type?.toUpperCase()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      !loading && <div>No wishlist yet.!</div>
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
