import BlogSlider from 'components/blog-components/blog-slider-v1'
import Footer from 'components/global-components/footer'
import Navbar from 'components/global-components/NavbarShop'
import CallToActonV1 from 'components/section-components/call-to-action-v1'
import TestimonialV2 from 'components/section-components/testimonial-v2'
import React from 'react'

function PostsProperty() {
    return (
        <div>
            <Navbar/>
            <TestimonialV2/>
            <CallToActonV1/>
            <Footer/>
        </div>
    )
}

export default PostsProperty
