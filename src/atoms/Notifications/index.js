import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {persistAtom} from "helpers";

export const notificationsState = atom({
  key: 'notificationsState', // unique ID (with respect to other atoms/selectors)
  default:[],
  effects_UNSTABLE: [persistAtom("notificationsState")],
});

export const notificationsSelector = selector({
  key: 'notificationsSelector',
  get: ({get}) => {
    const state=get(notificationsState);
    return {
          results:state,
          count:state.length,
          unread:state.filter(n=>n.status!=="read").map(n=>n.sentTime),
      };
  },
})

export const localNotificationState = atom({
  key: 'localNotificationsState', // unique ID (with respect to other atoms/selectors)
  default:null,
});
