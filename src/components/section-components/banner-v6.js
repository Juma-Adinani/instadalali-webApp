import React, { useState, useEffect } from "react";
import SearchForm from 'components/section-components/search-form';
import { useRecoilState } from "recoil";
import { filtersState } from "atoms";


export default function BannerIntro() {
	const publicUrl = process.env.PUBLIC_URL + '/';
	const [filters, setFilters] = useRecoilState(filtersState);
	function setOfferType(type) {
		// alert(type);
		setFilters({
			...filters,
			offer_type: [type],
		});
	}
	const { offer_type = ["rental"] } = filters;

	return <div className="ltn__slider-area ltn__slider-4 position-relative  ltn__primary-bg">
		<div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
			<video autoPlay muted loop id="myVideo">
				<source src={publicUrl + "assets/media/3.mp4"} type="video/mp4" />
			</video>

			<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-image--- bg-overlay-theme-black-30" data-bs-bg={publicUrl + "assets/img/slider/41.jpg"}>
				<div className="ltn__slide-item-inner text-center">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 align-self-center">
								<div className="slide-item-car-dealer-form">
									<div className="section-title-area ltn__section-title-2 text-center">
										<h1 className="section-title  text-color-white">Find Your <span className="ltn__secondary-color-3">Perfect</span> Home</h1>
									</div>
									<div className="ltn__car-dealer-form-tab">
										<div className="ltn__tab-menu  text-uppercase text-center">
											<div className="nav">
												<a onClick={() => setOfferType("rental")} href=".#"
													className={offer_type.includes("rental") ? "active show" : ""} data-bs-toggle="tab">
													<i className="fas fa-home" />For Rental
												</a>
												<a href=".#"
													className={offer_type.includes("sale") ? "active show" : ""}
													onClick={() => setOfferType("sale")} data-bs-toggle="tab">
													<i className="fas fa-home" />For Sale
												</a>
											</div>
										</div>
										<SearchForm />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

}
