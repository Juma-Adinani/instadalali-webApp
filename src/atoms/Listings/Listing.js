import { atom, selector } from "recoil";
import _ from "lodash";

export const listingState = atom({
  key: "listingState", // unique ID (with respect to other atoms/selectors)
  default: {
    has_fence: false,
    has_fan: false,
    is_standalone: false,

    is_furnished: false,
    has_sitting_room: false,
    has_dinning_room: false,
    has_security: false,
    // "has_heating": false,
    has_air_conditioning: false,

    // "kitchens_count": null,
    // "has_own_electricity_billing": false,
    // "has_agent_rental_fee": false,

    min_payment_months_count: null,
    bedrooms_count: 1,
    bathrooms_count: 0,
    master_bedrooms_count: null,

    price: null,
    price_currency: "TZS",

    // "agent_visiting_fee": 20000.0,
    // "agent_visiting_fee_currency": "TZS",

    offer_type: "rental",
    is_available: true,
  }, // default value (aka initial value)
  // effects_UNSTABLE: [persistAtom("listingState")],
});

export const listingSelector = selector({
  key: "listingSelector",
  get: ({ get }) => {
    return get(listingState);
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
