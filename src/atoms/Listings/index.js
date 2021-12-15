
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


export const listingsState = atom({
  key: 'listingsState', // unique ID (with respect to other atoms/selectors)
  default: {
    results:[],
    count:0,
  }
});

export const listingsSelector = selector({
  key: 'listingsSelector',
  get: ({get}) => {
    const state=get(listingsState);
    return state
  },
});