import { requests } from "./apiClient";
import {url} from "./config";

class MMKV{
  set(key, value){
    return localStorage.setItem(key, value);
  }
  save(key, value){
    return this.set(key, value)
  }
  getString(key){
    return localStorage.getItem(key);
  }
  clear(){
    return localStorage.clear();
  }
  remove(key){
    return localStorage.removeItem(key);
  }
}


const store=new MMKV();
class Store{
  constructor(){
      this.store = store; 
  }
  saveDeviceToken=async(token)=>{
     this.store.set(
       'deviceToken', // Note: Do not use underscore("_") in key!
        token,
      ); 
      // also update remote token if user is logged in
      const loggedUser=this.getUser();
      if(loggedUser){
          const data={
            user:loggedUser?.id,
            name:loggedUser?.username, 
            type:"web", 
            registration_id:token, 
            device_id:loggedUser?.username
          }
          try{
            await requests.post(url.device, data);
          }catch(error){
            // console.log("Error saving token", error)
          }
          
      }
  }

  setUser=(user)=>{
    if(user?.pk) user.id=user.pk;
    this.store.set("authUser", JSON.stringify(user))
    return user;
  }

  getUser=()=>{
    const user=this.store.getString("authUser");
    // console.log("user", user)
    try{
      return user?JSON.parse(user):user;
    }catch(error){
      return user
    }
    
  }


  getDeviceToken(){
    const key='deviceToken';
    return this.store.getString(key);
  }

  // notifications
  saveNotification(notification){
     const key='notificationsState';
     let notifications=this.store.getString(key)||JSON.stringify([]);
     this.store.save(
        key, // Note: Do not use underscore("_") in key!
        JSON.stringify([{...notification, status:"unread"}, ...JSON.parse(notifications)]),
     ); 
  }
}

export const storage=new Store()



