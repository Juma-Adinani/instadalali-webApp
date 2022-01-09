/* eslint-disable no-undef */
import {storage} from './storage';
import {url} from './config';
import { requests } from './apiClient';
import {DefaultValue } from 'recoil';

const remoteSync={
  'wishlistsState':`${url.dalali.wishlist}bulksync/`
};

export const persistAtom = (key) => ({setSelf, onSet}) => {
  const savedValue=storage.store.getString(key);
 setSelf(
    savedValue != null ? JSON.parse(savedValue):new DefaultValue() 
  );
  function saveData(value){
    storage.store.set(key, JSON.stringify(value));
    // TODO: find a way to bulk save these remotely too
    const remoteSyncLink = remoteSync[key];
    if(remoteSyncLink) {
      // console.log("remote items", value)
      requests.post(remoteSyncLink, {ids:value});
    }
  }
  onSet(saveData);
};
