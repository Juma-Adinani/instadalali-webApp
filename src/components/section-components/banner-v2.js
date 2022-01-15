import React from "react";
import SearchForm from 'components/section-components/search-form';

export default function BannerInfo(prop){
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <div
        className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1"
        style={{
          background: `#fff`,
        }}
      >
        <div className="ltn__slider-11-inner">
          <div className="ltn__slider-11-active">
            {/* slide-item */}
            {/* <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                    <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
			                    <h1 className="slide-title animated ">Search and Find <br /><span>Luxury</span> House</h1>
			                    <div className="slide-brief animated">
			                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/about" className="theme-btn-1 btn btn-effect-1">Make An Enquiry</Link>
			                      <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
			                        <i className="icon-play  ltn__secondary-color" />
			                      </a>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/61.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div> */}
            {/* slide-item */}
            {/* <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                    <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
			                    <h1 className="slide-title animated ">Find Your Dream <br /> House By Us</h1>
			                    <div className="slide-brief animated">
			                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
			                      <Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/62.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div> */}
            {/* slide-item */}
            {/* <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                    <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
			                    <h1 className="slide-title animated ">Find Your Dream <br /> House By Us</h1>
			                    <div className="slide-brief animated">
			                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
			                      <Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/63.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div> */}
            {/* slide-item */}
            <div
              className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11"
              style={{ background: `transparent` }}
            >
              <div className="ltn__slide-item-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play" />
                            </a>
                          </div>
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i
                                className="fas fa-home"
                                style={{ color: `#338a5d` }}
                              />
                            </span>
                            Instadalali Real Estate Agency
                          </h6>
                          <p
                            className="slide-title animated "
                            style={{ color: `black` }}
                          >
                            Use AI powered VR and AR tours choosing your home
                          </p>
                          <div className="slide-brief animated">
                            <p>
                              We aim to have the most complete list of
                              properties for rent and buy in Tanzania and reduce
                              realtor's (dalali) fees by connecting customers
                              and landlords directly.
                              <br />
                              <br />
                              We give you smart tools and resources to help you
                              shop smarter for your next home.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <a
                              href="https://onelink.to/instadalali"
                              className="theme-btn-1 btn btn-effect-1"
                              style={{
                                borderRadius: `4px`,
                              }}
                            >
                              <span>
                                <i
                                  class="fab fa-apple"
                                  style={{ fontSize: `2rem` }}
                                ></i>
                              </span>
                              &nbsp;<span> App Store</span>
                            </a>
                            <a
                              href="https://onelink.to/instadalali"
                              className="btn btn-transparent btn-effect-3"
                              style={{ borderRadius: `4px` }}
                            >
                              <i
                                class="fab fa-google-play"
                                style={{ fontSize: `2rem`, color: `#338a5d` }}
                              ></i>
                              &nbsp; Play Store
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img">
                        <img
                          //   src={publicUrl + "assets/img/slider/64.jpg"}
                          src={publicUrl + "assets/img/slider/iPhoneX2.png"}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider-4-pagination */}
          <div className="ltn__slider-11-pagination-count">
            <span className="count" />
            <span className="total" />
          </div>
          {/* slider-sticky-icon */}
          <div className="slider-sticky-icon-2">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <SearchForm />
      </div>
    );
  
}

