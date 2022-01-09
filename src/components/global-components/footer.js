import { url } from 'helpers';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

export default function Footer(props){

    useEffect(()=> {

        const $ = window.$;

        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
        $('.go-top').find('a').on('click', function () {
            $(".quarter-overlay").fadeIn(1);
            $(window).scrollTop(0);
            setTimeout(function(){
                $(".quarter-overlay").fadeOut(300);
                }, 800);
        });

        $(document).on('click','.theme-btn-1 ', function(){ 
        $( 'div' ).removeClass( 'modal-backdrop' );
        $( 'div' ).removeClass( 'show' );
        $( 'div' ).removeClass( 'fade' );
        $('body').attr("style", "");
        });
    }, [])

      let publicUrl = process.env.PUBLIC_URL+'/'
      return (
          <footer className="ltn__footer-area">
            <div
            className="footer-top-area  section-bg-2 plr--5"
            //   style={{ background: `#338a5d` }}
          >
            <div className="container-fluid">
              <div
                className="row"
                style={{
                  display: `flex`,
                  justifyContent: `space-around`,
                  alignItems: `center`,
                }}
              >
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-about-widget">
                    <div className="footer-logo">
                      <div className="site-logo">
                        <img
                          src={
                            publicUrl + "assets/img/instadalali-logo-3.png"
                          }
                          alt="Logo"
                        />
                      </div>
                    </div>
                    <p>
                      We give you smart tools and resources to help you shop
                      smarter for your next home.
                    </p>
                    <div className="footer-address">
                      <ul>
                        {/* <li>
                          <div className="footer-address-icon">
                            <i className="icon-placeholder" />
                          </div>
                          <div className="footer-address-info">
                            <p>Survey university road - Dar Es Salaam</p>
                          </div>
                        </li> */}
                        <li>
                          <div className="footer-address-icon">
                            <i className="icon-call" />
                          </div>
                          <div className="footer-address-info">
                            <p>
                              <a href="tel:+255 789 544 920">
                                +255 789 544 920
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="footer-address-icon">
                            <i className="icon-mail" />
                          </div>
                          <div className="footer-address-info">
                            <p>
                              <a href="mailto:info@instadalali.com">
                                info@instadalali.com
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__social-media mt-20">
                      <Social />
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-menu-widget clearfix">
                    <h4 className="footer-title">About Us</h4>
                    <div className="footer-menu go-top">
                      <ul>
                        <li>
                          <a href="https://hudumabomba.com/">Company</a>
                        </li>
                        <li>
                          <Link to={url.routes.faq}>FAQ</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-menu-widget clearfix">
                    <h4 className="footer-title">Support</h4>
                    <div className="footer-menu go-top">
                      <ul>
                        <li>
                          <a href="https://instagram.com/instadalali">
                            Community
                          </a>
                        </li>
                        <li>
                          {/* <a href="/https://instadalali.com/contact">Contact</a> */}
                          <Link to={url.routes.contact}>Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-menu-widget clearfix">
                    <h4 className="footer-title">Terms & Conditions</h4>
                    <div className="footer-menu go-top">
                      <ul>
                        <li>
                          <Link to={url.routes.tnc}>Terms of use</Link>
                        </li>
                        <li>
                          <Link to={url.routes.privacy}>Privacy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          <Copyright />
          </div>
        </footer>)
}

