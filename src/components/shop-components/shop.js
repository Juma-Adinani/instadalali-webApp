import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import parse from "html-react-parser";
import Sidebar from "./shop-sidebar";
import ListItem from "./ListItem";
// import Map from "../section-components/map";
import { url, requests, utils } from "helpers";
import ExpandItem from "./ExpandItem";
import Pagination from "./Pagination";
import Wishlist from "./AddWishlist";
import Cart from "./add-cart";

function ShopGridV1(props) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [meta, setMeta] = useState({});
  const [pageSize, setPageSize] = useState(15);
  const [queryParams, setQueryParams] = useState({});

  // let publicUrl = process.env.PUBLIC_URL + "/";
  async function fetchData(link) {
    try {
      const res = await requests.get(link);
      setResults(res.results);
      setLoading(false);
      setMeta(res); //TOdo: remove results from res to make this var lighter
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const link = utils.stringify(queryParams, {
      baseURL: url.dalali.listing,
    });
    fetchData(link);
  }, [props, queryParams]);

  const onExpand = (item) => {
    setSelectedItem(item);
  };

  const onAddWishlist = (item) => {
    setSelectedItem(item);
  };
  const { page = 1, count = 0 } = meta;

  return (
    <div>
      <div className="ltn__product-area ltn__product-gutter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8  mb-100">
              <div className="ltn__shop-options">
                <ul className="justify-content-start">
                  <li className="d-nones">
                    <div className="showing-product-number text-right">
                      <span>
                        Showing {(page - 1) * pageSize} – {page * pageSize} of{" "}
                        {utils.formatNumber(count || 0)} results
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <select className="nice-select">
                        <option>Sort By Featured</option>
                        <option>Sort by popularity</option>
                        <option>Sort by new arrivals</option>
                        <option>Sort by price low to high</option>
                        <option>Sort by price high to low</option>
                      </select>
                    </div>
                  </li>

                  <li>
                    <div className="short-by text-center">
                      <select className="nice-select">
                        <option>Per Page: 15</option>
                        <option>Per Page: 50</option>
                        <option>Per Page: 100</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                {/* **************************************
                    House for rent and for sale (House details)
                  ************************************** */}
                {/* <div className="tab-pane fade" id="liton_product_list"> */}
                <div
                  className="tab-pane fade active show"
                  id="liton_product_grid"
                >
                  <div className="ltn__product-tab-content-inner ltn__product-list-view">
                    <div className="row">
                      <div className="col-lg-12">
                        {/* Search Widget */}
                        <div className="ltn__search-widget mb-30">
                          <form action="#">
                            <input
                              type="text"
                              name="search"
                              placeholder="Search your keyword..."
                            />
                            <button type="submit">
                              <i className="fas fa-search" />
                            </button>
                          </form>
                        </div>
                      </div>
                      {/* ltn__product-item  in horizontal view (House details at large)*/}
                      {results.map((item, index) => (
                        <ListItem
                          key={index}
                          item={item}
                          onExpand={onExpand}
                          onAddWishlist={onAddWishlist}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* **************************************
					       House for rent and for sale
				      ************************************** */}
              <Pagination
                {...meta}
                onClickPage={(page) =>
                  setQueryParams({ ...queryParams, page: page + 1 })
                }
              />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Wishlist item={selectedItem} /> {/* that's love icon */}
      <ExpandItem item={selectedItem} /> {/* that's expand icon */}
      <Cart /> {/*after expand it, then onclick*/}
    </div>
  );
}

export default ShopGridV1;
