import { url, utils, width } from "helpers";
import { atom, selector } from "recoil";
import { priceSliderScale, sortingOptions, persistAtom } from "helpers";
import schema from "schema";
import _ from "lodash";

export * from "./Listings";
export * from "./Notifications";
export * from "./Wishlists";
export * from "./Listings/Listing";

export const filtersState = atom({
  key: "filtersState", // unique ID (with respect to other atoms/selectors)
  default: {
    order_by: "-post__post_date",
    // "has_fence": true,
    // "has_fan": true,
    // "is_standalone": false,

    // "is_furnished": true,
    // "has_sitting_room": true,
    // "has_dinning_room": false,
    // "has_security": true,
    // "has_heating": false,
    // "has_air_conditioning": false,

    // "kitchens_count": null,
    // "has_own_electricity_billing": true,
    // "has_agent_rental_fee": true,

    // "min_payment_months_count": 6,
    // "bedrooms_count": 1,
    // "bathrooms_count": 0,
    // "master_bedrooms_count": 1,

    // "price": 400000.0,
    // "agent_visiting_fee": 20000.0,

    // "price_currency": "TZS",
    // "agent_visiting_fee_currency": "TZS",

    // "offer_type": ["rental"],
  }, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom("filtersState")],
});

export const filtersSelector = selector({
  key: "filtersSelector",
  get: ({ get }) => {
    const _filtersState = get(filtersState);
    const { minFactor, maxFactor, getMinValue, getMaxValue } = priceSliderScale;
    const query = schema.listings;
    let filtersState_copy = { ..._filtersState, query };
    if (filtersState_copy.device_token) delete filtersState_copy.device_token; //remove device_toke in the query
    if (filtersState_copy.price__gte) {
      filtersState_copy.price__gte = getMinValue(
        filtersState_copy.price__gte,
        width
      );
    }
    if (filtersState_copy.price__lte) {
      filtersState_copy.price__lte = getMaxValue(
        filtersState_copy.price__lte,
        width
      );
    }
    const filters_count = Object.keys(
      _.pickBy(filtersState_copy, _.identity)
    ).length;
    let order_byValue = `${filtersState_copy.order_by}`.replace("-", "");
    const isDESC = `${filtersState_copy.order_by}`.startsWith("-");
    const sortByOption = sortingOptions.filter(
      (o) => o.value === order_byValue
    )[0];

    const getURLParams = (data) => {
      return utils.stringify({
        ...data,
        sortByOption: undefined,
      });
    };

    return {
      ..._filtersState,
      filters_count,
      sortByOption: sortByOption ? { ...sortByOption, isDESC } : null,
      startURL: `${url.dalali.listing}?${getURLParams(filtersState_copy)}`,
    };
  },
});
/*
            "has_fence": true,
            "has_fan": true,
            "bathrooms_count": null,
            "master_bedrooms_count": 1,
            "is_standalone": false,
            "bedrooms_count": 1,
            "is_furnished": true,
            "has_sitting_room": true,
            "has_dinning_room": false,
            "has_security": true,
            "has_heating": false,
            "has_air_conditioning": false,
            "agent_visiting_fee": 20000.0,
            "agent_visiting_fee_currency": "TZS",
            "kitchens_count": null,
            "has_own_electricity_billing": true,
            "has_agent_rental_fee": true,
            "price": 400000.0,
            "price_currency": "TZS",
            "offer_type": "rental",
            "min_payment_months_count": 6,
*/
