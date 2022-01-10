import { url, utils, requests } from "helpers";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavbarInfo(props){

  const publicUrl = process.env.PUBLIC_URL + "/";
  const loggedUser = utils.getUser();
  const [count, setCount] = useState([]);

  async function getCount() {
    try {
      const response = await requests.get(url.dalali.wishlist);
      setCount(response.count);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loggedUser && getCount();
  }, []);
  

  return (
    <div>
      <header
        className={
          "ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- "
        }
      >
        {/* ltn__header-middle-area start */}
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
          <div className="container">
            <div className="row ">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo go-top">
                    <Link to="/">
                      <img
                        src={publicUrl + "assets/img/logo-2.png"}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col header-menu-column">
                <div className="header-menu d-none d-xl-block go-top">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <div style={{ width: `100%` }}></div>
                        {!loggedUser && <li>
                          <Link to={url.routes.login}>Sign In</Link>
                        </li>}
                        {!loggedUser && 
                        <li>
                          <Link to={url.routes.register}>Sign Up</Link>
                        </li>}
                        {!!loggedUser && 
                        <li>
                          <Link to={url.routes.shop}>Hi {loggedUser?.username}</Link>
                        </li>}
                        {/* <li className="special-link">
                          <Link to={url.routes.shop}>Get Started</Link>
                        </li> */}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col--- ltn__header-options ltn__header-options-2 ">
                {/* Mobile Menu Button */}
                <div className="mobile-menu-toggle d-xl-none">
                  <a
                    href="#ltn__utilize-mobile-menu"
                    className="ltn__utilize-toggle"
                  >
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      />
                      <path d="M300,320 L540,320" id="middle" />
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__header-middle-area end */}
      </header>
      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to="/">
                <img
                  src={publicUrl + "assets/img/logo.png"}
                  alt="Logo"
                />
              </Link>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="ltn__utilize-menu-search-form d-none">
            <form action={"#"}>
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            {loggedUser ? (
              <ul>
                <li>
                  <Link to="/" title="My Account">
                    <span className="utilize-btn-icon">
                      <i className="far fa-user" />
                    </span>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" title="Wishlist">
                    <span className="utilize-btn-icon">
                      <i className="far fa-heart" />
                      {/* <sup>3</sup> */}
                      {count}
                    </span>
                    Wishlist
                  </Link>
                </li>
              </ul>
            ) : (
              <div></div>
            )}
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/instadalali/"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/instadalali/" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/instadalali/"
                  title="Instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
