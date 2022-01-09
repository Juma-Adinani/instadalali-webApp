import React, { useEffect, useState } from "react";
import Sidebar from "./shop-sidebar";
import ListItem from "./ListItem";
// import Map from "../section-components/map";
import { url, requests, utils } from "helpers";
import ExpandItem from "./ExpandItem";
import Pagination from "./Pagination";
import Wishlist from "./AddWishlist";
import Cart from "./add-cart";
import Loading from "components/Loading"

import { useRecoilState} from "recoil";
import { filtersState} from "atoms";
import { useHistory } from "react-router-dom";
import _ from "lodash";

export default function Shop(props) {
  const [filters, setFilters] = useRecoilState(filtersState);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [meta, setMeta] = useState({});
  const loggedUser = utils.getUser();
  const history =useHistory();

  async function fetchData(link) {
    try {
      const res = await requests.get(link);
      setResults(res.results);
      setLoading(false);
      setMeta(res); //TOdo: remove results from res to make this var lighter
    } catch (e) {
      setResults([]);
      console.log(e);
    }
  }

  useEffect(()=>{
    // get data params and save to state filters
    const urlData = utils.getSearchParams(window.location.hash)
    setFilters({
      // ...filters, 
      ...urlData,
    })
  }, [])

  useEffect(() => {
      setLoading(true);
      utils.scrollTop();
      const link = utils.stringify(filters , {
        baseURL: url.dalali.listing,
      });
      fetchData(link)
      .finally(()=>{
        setLoading(false);
      })
      !_.isEmpty(filters) && history.replace({pathname: `${url.routes.shop}?${utils.stringify(filters)}`})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const onExpand = (item) => {
    setSelectedItem(item);
  };

    async function addWishlist(item) {
      return await requests.post(url.dalali.wishlist, {
        user: loggedUser?.pk,
        listing: item.id,
      });
    }

  const onAddWishlist = (item) => {
    setSelectedItem(item);
    if (loggedUser) {
      addWishlist(item);
    } else {
      alert("You must login to add to wishlist");
      utils.navigate(url.routes.login);
    }
  };


  function handleInputChange(e) {
    // console.log("selected ",e.target.name, e.target.value)
    let dict={
      [e.target.name]: e.target.value
    }
    setFilters({
        ...filters,
        page:undefined,
       ...dict
    });
}

  const { page = 1, count = 0 } = meta;
  const pageSize = filters?.size || 12;
  return (
    <div>
      <div className="ltn__product-area ltn__product-gutter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8  mb-100">
              <div className="ltn__shop-options">
                <ul className="justify-content-start">
                  {count>0 && <li className="d-nones">
                    <div className="showing-product-number text-right">
                      <span>
                        Showing {(page - 1) * pageSize} – {page * pageSize} of{" "}
                        {utils.formatNumber(count || 0)} results
                      </span>
                    </div>
                  </li>}
                  <li>
                    <div className="short-by text-center">
                      <select className="nice-select" onChange={handleInputChange} value={filters.order_by}  id="order_by"  name="order_by">
                        <option value={"is_featured"}>Sort By Featured</option>
                        <option value="-hits_count">Sort by popularity</option>
                        <option value="-post__post_date">Sort by new arrivals</option>
                        <option value="-price" >Sort by Most Expensive</option>
                        <option value="price">Sort by Cheapest</option>
                        <option value="-bedrooms_count">Sort by Bedroom Count Desc</option>
                        <option value="bedrooms_count">Sort by Bedroom Count Asc</option>
                        <option value="location__name">Sort by Location</option>
                        <option value="post__profile__username">Sort by Agent Name</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <select  value={filters.size} className="nice-select" id="size" name="size" onChange={handleInputChange}>
                        <option value={"12"}>Size: 12</option>
                        <option  value={"50"}>Size: 50</option>
                        <option  value={"100"}>Size: 100</option>
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
                              onChange={handleInputChange}
                              value={filters.search}
                            />
                            <button type="submit">
                              <i className="fas fa-search" />
                            </button>
                          </form>
                        </div>
                      </div>
                      {/* ltn__product-item  in horizontal view (House details at large)*/}
                      {loading && <Loading count={6}/>}
                      {results.map((item, index) => (
                        <ListItem
                          key={item.id}
                          item={item}
                          onExpand={onExpand}
                          onAddWishlist={onAddWishlist}
                        />
                      ))}
                      {results.length===0 && !loading && <div>No results found</div>}
                      {loading && <Loading count={6}/>}
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
                  setFilters({ ...filters, page: page + 1 })
                }
              />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Wishlist item={selectedItem} /> {/* that's love icon */}
      <ExpandItem 
        item={selectedItem}   
        onExpand={onExpand}
        onAddWishlist={onAddWishlist} /> {/* that's expand icon */}
      <Cart  item={selectedItem} /> {/*after expand it, then onclick*/}
    </div>
  );
}

