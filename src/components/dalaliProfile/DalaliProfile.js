import Footer from 'components/global-components/footer'
import Navbar from 'components/global-components/NavbarShop'
import PageHeader from 'components/global-components/page-header'
import CallToActonV1 from 'components/section-components/call-to-action-v1'
import React from 'react'
import ProfileList from './ProfileList'

function DalaliProfile() {
    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Dalali profile" />
        <ProfileList />
        {/* <CallToActonV1 /> */}
        <Footer />
      </div>
    );
}

export default DalaliProfile
