import { requests, url, utils } from "helpers";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { filtersState } from "atoms";
import AsyncSelect from "react-select/async";
import SimpleSelect from "react-select";

export function Select(props) {
  const { url: baseURL, getLabel, onResults, name } = props;
  const [reloading, setReloading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [defaultValue, setDefaultValue] = useState(props.defaultValue);
  const [options, setOptions] = useState(true);

  async function loadOptions(search = "") {
    const link = utils.stringify(
      { search: search || defaultValue },
      { baseURL }
    );
    let res = {}
    setLoading(true);
    let _options = []
    try {
      res = await requests.get(link);
      onResults && onResults(res);

      _options = res.results.map((i) => ({
        value: i.id,
        label: getLabel(i),
      }));
    } catch (error) {

    }
    setLoading(false);
    // set default value if exists
    if (defaultValue) {
      setDefaultValue(
        _options.filter(
          (o) => o.value === props.defaultValue?.value || props.defaultValue
        )[0]
      );
    }
    setOptions(_options);
    return _options;
  }

  function onChange(e) {
    if (props.onChange) {
      props.onChange({ target: { ...e, name } });
    } else {
      alert("Value changed " + JSON.stringify({ target: { ...e, name } }));
    }
  }
  async function reload() {
    setReloading(true);
    await utils.sleep(10);
    setReloading(false);
  }

  //   useEffect(() => {
  //     setDefaultValue(props.defaultValue);
  //   }, [props.defaultValue]);

  useEffect(() => {
    //    to help refreshing selections
    setOptions(true);
    reload();
  }, [baseURL]);

  return reloading ? null : (
    <AsyncSelect
      {...props}
      value={defaultValue}
      onChange={onChange}
      cacheOptions
      defaultOptions={options}
      isLoading={loading}
      loadOptions={loadOptions}
    />
  );
}

export default function SearchForm(props) {
  const [filters, setFilters] = useRecoilState(filtersState);
  const [locations, setLocations] = useState({ count: 0 });
  const [profiles, setProfiles] = useState({ count: 0 });
  const [listingsCount, setListingsCount] = useState(50e3);
  const [profileURL, setProfileURL] = useState(url.profile);

  function handleInputChange(e) {
    console.log("e", e.target);
    const name = e.target.name;
    setFilters({
      ...filters,
      [name]: e.target.value,
    });
  }

  function updateProfileURL() {
    const location__id = filters.location__id;
    setProfileURL(
      `${url.profile}${location__id
        ? `?advanced_search=posts__listings__location:${location__id}&distinct=id&include=listings_count`
        : "?include=listings_count"
      }`
    );
  }

  useEffect(() => {
    updateProfileURL();
  }, [filters.location__id]);

  useEffect(() => {
    // search listings
    requests
      .get(
        utils.stringify(
          {
            post__owner_profile__id: filters.post__owner_profile__id,
            location__id: filters.location__id,
            offer_type: filters.offer_type,
            query: `{id}`,
            size: 1,
          },
          { baseURL: url.dalali.listing }
        )
      )
      .then((res) => setListingsCount(res.count))
      .catch(console.log);
  }, [filters]);

  return (
    <div className="ltn__car-dealer-form-area mt--65 mt-120 pb-115---">
      {/* <div className="container"> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__car-dealer-form-tab">
              <div className="tab-content bg-white box-shadow-1 position-relative pb-10">
                <div
                  className="tab-pane fade active show"
                  id="ltn__form_tab_1_1"
                >
                  <div className="car-dealer-form-inner">
                    <form
                      action={url.routes.listings}
                      className="ltn__car-dealer-form-box row"
                    >
                      <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
                        <Select
                          url={`${url.location}?order_by=name&size=100`}
                          getLabel={(item) => item.name}
                          name="location__id"
                          onChange={handleInputChange}
                          classNamePrefix="select2-selection"
                          defaultValue={filters["location__id"]}
                          onResults={setLocations}
                          placeholder={`Choose Area (${locations.count})`}
                          style={{ height: "10" }}
                        />
                        {/* <select className="nice-select" name="location__id" onChange={handleInputChange} value={filters["location__id"]}>
			                      <option value="">Choose Area ({locations.count})</option>
								  {locations.results?.map(loc=><option key={loc.id} value={loc.id}>{loc.name}</option>)}
			                </select> */}
                      </div>

                      <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
                        <Select
                          name="post__owner_profile__id"
                          url={profileURL}
                          getLabel={(profile) =>
                            `${profile.full_name} (${profile.listings_count})`
                          }
                          onChange={handleInputChange}
                          classNamePrefix="select2-selection"
                          defaultValue={filters["post__owner_profile__id"]}
                          onResults={setProfiles}
                          placeholder={`Choose Agent (${profiles.count})`}
                        />
                        {/* <select 
									className="nice-select" name="post__owner_profile__id"  
									onChange={handleInputChange}
									value={filters["post__owner_profile__id"]}
								>
			                      <option value="">Choose Agent ({profiles.count})</option>
								  {profiles.results?.map((profile, i)=><option key={i} value={profile.id}>{profile.full_name} ({profile.listings_count})</option>)}
			                    </select> */}
                      </div>
{/* 
                      <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
                        <SimpleSelect
                          placeholder={"Choose Offer Type"}
                          name="offer_type"
                          classNamePrefix="select2-selection"
                          onChange={(e) =>
                            handleInputChange({
                              target: { ...e, name: "offer_type" },
                            })
                          }
                          defaultValue={filters["offer_type"] && { value: filters["offer_type"], label:  filters["offer_type"]?.title && filters["offer_type"]?.title() }}
                          options={[
                            { label: "All", value: "" },
                            { label: "Rental Property", value: "rental" },
                            { label: "For Sale", value: "sale" },
                          ]}
                        />
                      </div> */}

                      <div className=" mt-2 ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                        <div className="btn-wrapper text-center mt-0 go-top">
                          <button
                            type="submit"
                            class="btn theme-btn-1 btn-effect-1 text-uppercase"
                          >
                            {utils.toHR(listingsCount)}+ Homes
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
