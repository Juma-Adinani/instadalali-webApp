import { requests, url, utils } from 'helpers';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from "recoil";
import { filtersState } from "atoms";


export default function SearchForm(props){
	const [filters, setFilters] = useRecoilState(filtersState);
	const [locations, setLocations] = useState({count:0})
	const [profiles, setProfiles] = useState({count:0})
	const [listingsCount, setListingsCount] = useState(50e3)

	function handleInputChange(e){
		const name=e.target.name;
		setFilters({
			...filters, 
			[name]: e.target.value
		})
	}

	async function fetchLocations(){
		const res=await requests.get(url.location)
		setLocations(res)
	}

	async function fetchProfiles(){
		const location__id=filters.location__id;
		const res=await requests.get(
			`${url.profile}${location__id?`?advanced_search=posts__listings__location:${location__id}&distinct=id&include=listings_count`:"?include=listings_count"}`
		)
		setProfiles(res)
	}

	useEffect(()=>{
		fetchLocations()
	}, [])

	useEffect(()=>{
		fetchProfiles()
	}, [filters.location__id])

	useEffect(()=>{
		// search listings
		requests.get(utils.stringify({
			post__owner_profile__id:filters.post__owner_profile__id,
			location__id:filters.location__id,
			offer_type:filters.offer_type,
			query:`{id}`,
			size:1,
		}, {baseURL:url.dalali.listing}))
		.then(res=>setListingsCount(res.count))
		.catch(console.log)
	}, [filters])

    return <div className="ltn__car-dealer-form-area mt--65 mt-120 pb-115---">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="ltn__car-dealer-form-tab">
			          <div className="ltn__tab-menu  text-uppercase d-none">
			            <div className="nav">
			              <a className="active show" data-bs-toggle="tab" href="#ltn__form_tab_1_1"><i className="fas fa-car" />Find A Car</a>
			              <a data-bs-toggle="tab" href="#ltn__form_tab_1_2" ><i className="far fa-user" />Get a Dealer</a>
			            </div>
			          </div>
			          <div className="tab-content bg-white box-shadow-1 position-relative pb-10">
			            <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
			              <div className="car-dealer-form-inner">
							<form action={url.routes.listings} className="ltn__car-dealer-form-box row">
			                  <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
			                    <select className="nice-select" name="location__id" onChange={handleInputChange} value={filters["location__id"]}>
			                      <option value="">Choose Area ({locations.count})</option>
								  {locations.results?.map(loc=><option key={loc.id} value={loc.id}>{loc.name}</option>)}
			                    </select>
			                  </div> 

			                  <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
			                    <select 
									className="nice-select" name="post__owner_profile__id"  
									onChange={handleInputChange}
									value={filters["post__owner_profile__id"]}
								>
			                      <option value="">Choose Agent ({profiles.count})</option>
								  {profiles.results?.map((profile, i)=><option key={i} value={profile.id}>{profile.full_name} ({profile.listings_count})</option>)}
			                    </select>
			                  </div>

			                  <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
			                    <select className="nice-select" name="offer_type"  onChange={handleInputChange} value={filters["offer_type"]}>
			                      <option value={""}>Offert Type</option>
			                      <option value="rental">Rent</option>
			                      <option value="sale">Sale</option>
			                    </select>
			                  </div>

			                  <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
			                    <div className="btn-wrapper text-center mt-0 go-top">
			                       <button type="submit" 
								   class="btn theme-btn-1 btn-effect-1 text-uppercase">
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
			  </div>
			</div>
}
