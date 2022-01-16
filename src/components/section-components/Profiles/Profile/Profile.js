import React from "react";
import { Link } from "react-router-dom";
import { url, utils } from "helpers";
import trimText from "read-more-react/dist/utils/trimText";
/*
 {
            "id": 36,
            "full_name": "Dalali Ubungo",
            "followers_count": 23261,
            "created": "2021-08-19T22:01:23.545000+03:00",
            "is_business_account": true,
            "is_private": false,
            "last_updated": "2021-08-19T22:02:41.440000+03:00",
            "igtvcount": 67,
            "mediacount": 6624,
            "userid": 1694432399,
            "biography": "REAL ESTATE AGENT UBUNGO:\nProfessional Online Broker.\nSelling/Buying & Renting House/Plots\n0716 776 247 Whtsp\n0754 221 168\n@dalali_ubungo",
            "is_verified": false,
            "is_claimed": false,
            "followees_count": 3929,
            "business_category_name": "Professional Services",
            "username": "dalali_ubungo",
            "user": null,
            "profile_pic_url": "https://instadalali.hudumabomba.com/media/profiles/1694432399/2019-12-01_09-11-35_UTC_profile_pic.jpg",
            "listings_count": null
        },
*/
export default function Profile(props) {
  const item = props.item || {};
  const { listings } = props;
  const summary = [
    [
      { title: "Full Name", value: item.full_name },
      { title: "Date Joined", value: utils.formatDate(item?.created) },
    ],
    [
      { title: "Business Category", value: item.business_category_name||"Real Estate Agency" },
      {
        title: "Listings Count",
        value: utils.formatNumber(item?.listings_count || 0),
      },
    ],
  ];
  return (
    <div className="ltn__team-details-area mb-120 pt-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="ltn__team-details-member-info text-center mb-40">
              <div className="team-details-img">
                <img src={item?.profile_pic_url} alt={item?.full_name || ""} />
              </div>
              <h2>{item?.full_name}</h2>
              <h6 className="text-uppercase ltn__secondary-color">
                {item?.business_category_name}
              </h6>
              {/* <div className="ltn__social-media-3">
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
              </div> */}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="ltn__team-details-member-info-details">
              <p>{item?.biography}</p>
              <div className="row">
                {summary.map((section, i) => (
                  <div className="col-lg-6" index={`section-${i}`}>
                    <div className="ltn__team-details-member-about">
                      <ul>
                        {section.map((field, j) => (
                          <li>
                            <strong>{field.title}:</strong> {field.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia consequu
                ntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p> */}
              <p>
                Most recent listings <span>
                        <Link
                          className="ltn__service-btn"
                          to={`${url.routes.listings}?post__owner_profile__id=${item?.id}`}
                        >
                          View All <i className="flaticon-right-arrow" />
                        </Link>
                </span>
              </p>
              <div className="row ltn__custom-gutter mt-50 mb-20">
                {listings.map((listing) => (
                  <div
                    className="col-xl-4 col-sm-6 col-12 go-top"
                    key={listing.id}
                  >
                    <div className="ltn__feature-item ltn__feature-item-6 text-center">
                      <div className="ltn__feature-icon">
                        <img src={listing?.post?.url} alt={""} />
                      </div>
                      <div className="ltn__feature-info">
                        <h4>
                          <Link to={url.routes.get("listing", listing)}>
                            {listing.price_currency}{" "}
                            {utils.formatNumber(listing.price)}
                          </Link>
                        </h4>
                        <p>{trimText(listing.post?.caption, 10, 80, 80)[0]}</p>
                        {/* <a class="ltn__service-btn" href="service.html">Read More</a> */}
                        <Link
                          className="ltn__service-btn"
                          to={url.routes.get("listing", listing)}
                        >
                          Read More <i className="flaticon-right-arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia consequu
                ntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p> */}
              <AgentInquiry item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentInquiry(props) {
    function onSubmit(e){
        e.preventDefault();
        // 145
        alert(`Your request is received and we will contact you shortly `)
    }
    const { item } = props;
    return (
        <div className="ltn__form-box contact-form-box box-shadow white-bg mt-50">
        <h4 className="title-2">Contact for any Inquiry</h4>
        <form id="contact-form" action=".#" method="post" onSubmit={onSubmit}>
            <div className="row">
            <div className="col-md-6">
                <div className="input-item input-item-name ltn__custom-icon">
                <input type="text" name="name" placeholder="Enter your name" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-item input-item-email ltn__custom-icon">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                />
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-item">
                <select className="nice-select">
                    <option>Select Service Type</option>
                    <option>Property Management </option>
                    <option>Mortgage Service </option>
                    <option>Consulting Service</option>
                    <option>Home Buying</option>
                    <option>Home Selling</option>
                    <option>Escrow Services</option>
                </select>
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-item input-item-phone ltn__custom-icon">
                <input
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                />
                </div>
            </div>
            </div>
            <div className="input-item input-item-textarea ltn__custom-icon">
            <textarea
                name="message"
                placeholder="Enter message"
                defaultValue={""}
            />
            </div>
            <p>
            <label className="input-info-save mb-0">
                <input type="checkbox" name="agree" /> Save my name, email, and
                website in this browser for the next time I comment.
            </label>
            </p>
            <div className="btn-wrapper mt-0">
            <button
                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                type="submit"
            >
                get an free service
            </button>
            </div>
            <p className="form-messege mb-0 mt-20" />
        </form>
        </div>
    );
}
