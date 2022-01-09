import { requests, url, utils } from "helpers";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CartMenu from "./CartMenu";

function Navbar(props) {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const loggedUser = utils.getUser();
  const history = useHistory();
  const [count, setCount] = useState(0);

  function handleLogOut() {
    utils.logout();
    history.push("/");
  }

  

  async function getCount() {
    try {
      if(!loggedUser) return;
      const response = await requests.get(`${url.dalali.wishlist}?query={id}&size=1`);
      setCount(response.count);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCount();
  }, []);

  return (
    <div>
      <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
        <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a href="mailto:info@instadalali.com">
                        <i className="icon-mail" /> info@instadalali.com
                      </a>
                    </li>
                    <li>
                      <a href="locations.html">
                        <i className="icon-placeholder" /> Msasani - Dar Es
                        Salaaam
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo go-top">
                    <Link to="/">
                      <img
                        src={publicUrl + "assets/img/logo.png"}
                        height={60}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
                {/* header-search-1 */}
                {false &&
                <div className="header-search-wrap">
                  <div className="header-search-1">
                    <div className="search-icon">
                      <i className="icon-search for-search-show" />
                      <i className="icon-cancel  for-search-close" />
                    </div>
                  </div>
                  <div className="header-search-1-form">
                    <form id="#" method="get" action="#">
                      <input
                        type="text"
                        name="search"
                        defaultValue
                        placeholder="Search here..."
                      />
                      <button type="submit">
                        <span>
                          <i className="icon-search" />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>}
                {/* user-menu */}
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="icon-user" />
                      </Link>
                      {loggedUser ? (
                        <ul className="go-top">
                          <li>
                            <Link to="/">My Account</Link>
                          </li>
                          <li>
                            <a href=".#" onClick={handleLogOut}>
                              Logout
                            </a>
                          </li>
                        </ul>
                      ) : (
                        <ul className="go-top">
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
                {/* mini-cart */}
                {loggedUser ? (
                  <div className="mini-cart-icon">
                    <a
                      href="#ltn__utilize-cart-menu"
                      className="ltn__utilize-toggle"
                    >
                      <i className="icon-shopping-cart"></i>

                      <sup>{count}</sup>
                    </a>
                  </div>
                ) : (
                  <div></div>
                )}
                {/* mini-cart */}
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
                  height={40}
                />
              </Link>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
        {false && 
          <div className="ltn__utilize-menu-search-form">
            <form action={"#"}>
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
        }

          <div className="ltn__utilize-menu">
            {loggedUser ? (
              <ul>
                <li>
                  <Link to={url.routes.shop}>Listings</Link>
                </li>
                <li>
                  <Link to={url.routes.logout}>Logout</Link>
                </li>
                <li>
                  <Link to={url.routes.contact}>Contact</Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to={url.routes.login}>Login</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            {loggedUser ? (
              <ul>
                <li>
                  <Link to="/my-account" title="My Account">
                    <span className="utilize-btn-icon">
                      <i className="far fa-user" />
                    </span>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to={url.routes.wishlist} title="Wishlist">
                    <span className="utilize-btn-icon">
                      <i className="far fa-heart" />
                      <sup>{count}</sup>
                    </span>
                    Wishlist
                  </Link>
                </li>
              </ul>
            ) : (
              <ul></ul>
            )}
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <a href="https://facebook.com/instadalali" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/instadalali" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/instadalali" title="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Utilize Cart Menu Start */}
      <CartMenu />
      {/* Utilize Cart Menu End */}
    </div>
  );
}

export default Navbar;
