import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const SearchFilter = ({ filter, setFilter }) => {

  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

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
                      value={value || ""}
                      onChange={(e) => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                      }}
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
};
