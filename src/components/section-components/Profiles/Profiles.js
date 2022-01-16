import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { requests, url, utils } from "helpers";
import _ from "lodash";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "components/Loading";
import ReadMoreReact from "read-more-react";
import PageHeader from "../../global-components/page-header";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const userPlaceholder = `https://th.bing.com/th/id/R.712f98fd73ac6574e5b4b18f9ae11b7e?rik=BrUEDn7buYGgcQ&pid=ImgRaw&r=0`;

function ListItemProfile(props) {
  const { item } = props;
  return (
    <div className="col-lg-4 col-sm-6" key={item.id}>
      <div className="ltn__team-item ltn__team-item-3---">
        <Link className="team-img" to={url.routes.get("profile", item)}>
          <img src={item.profile_pic_url || userPlaceholder} alt="" />
        </Link>
        <div className="team-info">
          <h4>
            <Link to={url.routes.get("profile", item)}>{item.full_name}</Link>
          </h4>
          <h6
            className="ltn__secondary-color"
            to={url.routes.get("profile", item)}
          >
            <Link to={url.routes.get("profile", item)}>
              {item.business_category_name}
            </Link>
          </h6>
          <div className="ltn__social-media">
            <ReadMoreReact
              text={item.biography}
              min={60}
              ideal={80}
              max={150}
              readMoreText="read more"
              className="text-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Profiles(props) {
  const params = utils.getSearchParams(window.location.href)
  const [results, setResults] = useState([]);
  const [resMeta, setResMeta] = useState({});
  const [search, setSearch] = useState(params.search||"");
  const [loading, setLoading] = useState(true);
  const history = useHistory()
  

  async function _fetchData(link) {
    try {
      setLoading(true);
      const res = await requests.get(link);
      const { page } = res;
      setResults(page > 1 ? [...results, ...res.results] : res.results);
      setResMeta({
        ...res,
        results: undefined, //unset results to save space
      });
    } catch (error) {
      alert(
        `Error loading data: ${JSON.stringify(error.data || error.message)}`
      );
    }
    loading && setLoading(false);
  }
  const fetchData = useCallback(_.throttle(_fetchData, 800), []);

  useEffect(() => {
    setResMeta({});
    const link = utils.stringify(
      {
        search,
      },
      { baseURL: url.profile }
    );
    fetchData(link);
    // update the url to keep history
    setURL(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  function loadMore() {
    resMeta?.next && _fetchData(resMeta?.next);
  }

  const _setURL=(search)=>{
    history.replace({pathname: `${url.routes.profiles}/${search?`?${utils.stringify({search})}`:""}`})
  }

  const setURL=useCallback(_.debounce(_setURL, 800), [])

  function handleSearchInputChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <PageHeader
        headertitle={`Property Agents (${resMeta?.count || 0})`}
        subheader="Agent"
      />
      <div className="ltn__team-area pb-90 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                Real Estate Agents
              </h6> */}
                {/* <h1 className="section-title">Property Agents</h1> */}
              </div>
            </div>
          </div>
          <div className="row ltn__search-widget mb-30">
            <form action={url.routes.profiles}>
              <input
                type="text"
                name="search"
                value={search}
                placeholder={`Search from ${resMeta.count || 0} profiles...`}
                onChange={handleSearchInputChange}
              />
              <button type="submit">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          {loading && <Loading count={10} />}
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={resMeta?.next}
            loader={<Loading count={5} />}
          >
            <div className="row justify-content-center">
              {results.map((item) => (
                <ListItemProfile item={item} key={item.key} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
