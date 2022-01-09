import React from "react";
export default function ProductSlider(props){
  const {item}=props;
  return (!!item?.post?.photos && 
      <div className="ltn__img-slider-area mb-90">
        <div className="container-fluid">
          <div className={item?.post?.photos?.length>1?"row ltn__image-slider-2-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all":"text-center"}>
            {item?.post?.photos.map((photo, index)=>(
              <div className="col-lg-12 text-center" key={`photo-${index}`}>
              <div className="ltn__img-slide-item-4">
                <a
                  href={photo.uri}
                  data-rel="lightcase:myCollection"
                >
                  <img src={photo.uri} alt="" height={window.innerHeight*0.6} width={window.innerWidth*0.8} />
                </a>
              </div>
            </div>))
            }
          </div>
        </div>
      </div>
    );
}

