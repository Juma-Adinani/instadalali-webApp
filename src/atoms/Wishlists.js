import { atom, selector } from "recoil";
import { persistAtom } from "helpers";
export const wishlistsState = atom({
  key: "wishlistsState", // unique ID (with respect to other atoms/selectors)
  default: [], //just a list of ids
  effects_UNSTABLE: [persistAtom("wishlistsState")],
});

export const wishlistsSelector = selector({
  key: "wishlistsSelector",
  get: ({ get }) => {
    const state = get(wishlistsState);
    return {
      results: state,
      count: state.length,
    };
  },
});
