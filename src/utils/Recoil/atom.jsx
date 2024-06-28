 import { atom } from "recoil";
 
 
 export const  UserDataState = atom({
    key: 'UserDataState', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
  });
 export const  UserData = atom({
    key: 'UserData', // unique ID (with respect to other atoms/selectors)
    default: {
      "name":"",
      "email":"",
      "phone":"",
      "bio":"",
      "address1":"",
      "address2":"",
      "country":"",
      "state":"",
      "city":"",
      "pincode":"",
      "imageurl":"",
    }, // default value (aka initial value)
  });