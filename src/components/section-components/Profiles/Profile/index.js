import React, { useState, useEffect } from "react";
import Navbar from "components/global-components/NavbarShop";
import PageHeader from "components/global-components/page-header";
import CallToActionV1 from "components/section-components/call-to-action-v1";
import Footer from "components/global-components/footer";
import ProfileDetail from "./Profile";
import { useParams } from "react-router-dom";
import { url, requests, utils } from "helpers";

export default function Profile(props) {
  const { id: itemId } = useParams();
  const [item, setItem] = useState({});
  const [listings, setListings] = useState([]);

  async function fetchData() {
    const link = utils.stringify(
      {
        include: `listings_count`,
      },
      {
        baseURL: url.getURL("profile", {
          type: "detail",
          item: { id: itemId },
        }),
      }
    );
    const res = await requests.get(link);
    setItem(res);
  }

  async function fetchListings() {
    const link = utils.stringify(
      {
        size: 3, order_by:"-post_date",
        post__owner_profile__id:itemId,

      },
      {
        baseURL: url.dalali.listing
    }
    );
    const res = await requests.get(link);
    setListings(res.results);
  }

  useEffect(()=>{
    fetchListings();
  }, [])

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  return (
    <div>
      <Navbar />
      <PageHeader headertitle={item?.full_name || "Profile"} parentPage={{name:"Profiles", to:url.routes.profiles}} />
      <ProfileDetail item={item} listings={listings} />
      <CallToActionV1 />
      <Footer />
    </div>
  );
}
