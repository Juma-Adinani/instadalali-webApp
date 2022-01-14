import React from 'react'

function searchProfile() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="ltn__shop-options"></div>
          <div className="tab-content ">
            <div className="tab-pane fade active show" id="liton_product_grid">
              <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                <div className="row">
                  <div className="col-lg-12">
                    {/* Search Widget */}
                    <div className="ltn__search-widget mb-30">
                      <input
                        type="text"
                        placeholder="Search your keyword..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default searchProfile
