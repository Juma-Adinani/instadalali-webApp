import React from 'react';
import Navbar from './global-components/NavbarShop';
import PageHeader from './global-components/page-header';
import ShogGrid from './shop-components/shop';
// import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

export default function Listings(props){
    return <div>
        <Navbar />
        <PageHeader headertitle="Listings" />
        <ShogGrid />
        <Footer />
    </div>
}


