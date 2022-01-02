import React, {useEffect, useState} from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider';
import ListingDetail from './shop-components/ListingDetail';
import Footer from './global-components/footer';
import { url, requests } from 'helpers';
import Loading from "components/Loading"

export default function Listing(props){
    const selectedItem=props.match?.params; //{id:12}
    // create a new variable for the item here so as to fetch an item with more details
    const [item, setItem] = useState(selectedItem);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const link = url.getURL("dalali.listing", {
        type: "detail",
        item: selectedItem,
      });
      getItem(link);
    }, [selectedItem]);
  
    async function getItem(link) {
      setLoading(true);
      try {
        const res = await requests.get(link);
        if (res.id) {
          setItem(res);
        }
      } catch (error) {
        console.warn(error);
      }
      setLoading(false);
    }
    if(loading) return <Loading count={5} />;
    return (<div>
                <Navbar />
                {!loading && false && <PageHeader headertitle="Listing Details" customclass="mb-0" />}
                {loading?<Loading count={5} />:<ProductSlider item={item} />}
                {loading?<Loading count={5} />:<ListingDetail item={item} />}
                <Footer />
            </div>)
}

