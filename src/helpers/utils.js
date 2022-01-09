/* eslint-disable no-extend-native */
import _ from "lodash";
import * as qs from "query-string";
import dayjs from "dayjs";
import HRNumbers from "human-readable-numbers";
import { requests, setAuthorization } from "./apiClient";
import { url } from "./config";
import { storage } from "./storage";

const customParseFormat = require("dayjs/plugin/customParseFormat");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
export const DEBUG = false;

String.prototype.trimChars = function (c) {
  var re = new RegExp("^[" + c + "]+|[" + c + "]+$", "g");
  return this.replace(re, "");
};

String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

String.prototype.title = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

class Actions {
  keyExtractor = (item, index) => `item-${item.id}-${index}`;

  createFormData = ({ body, fileFields = ["file"] } = {}) => {
    /*
      TODO: check if this actually works for the web
      */
    const data = new FormData();
    Object.keys(body).forEach((key) => {
      const value = body[key];
      if (fileFields.includes(key)) {
        data.append(key, {
          name: value.fileName,
          uri: value.uri,
          type: value.type,
          width: value.width,
          height: value.height,
        });
      } else {
        data.append(key, value);
      }
    });
    return data;
  };

  getItemByID = (items, id) => {
    const itemIndex = items.map((i) => i.id).indexOf(id);
    return items[itemIndex];
  };

  setUser = (user) => {
    return storage.setUser(user);
  };

  getUser = () => {
    return storage.getUser();
  };

  logout = async () => {
    setAuthorization(undefined);
    this.setUser(null);
    await requests.post(url.logout, {}, { withCredentials: false });
  };

  replaceAll = (str, a, b) => {
    return str?.replaceAll(a, b);
  };

  formatNumber = (inputNumber) => {
    let formatedNumber = Number(inputNumber)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    let splitArray = formatedNumber.split(".");
    if (splitArray.length > 1) {
      formatedNumber = splitArray[0];
    }
    return formatedNumber;
  };
  toHR = (number) => HRNumbers.toHumanString(number);

  formatDate = (date, format = "lll") => {
    const table = {
      LT: "h:mm A", //  8:02 PM
      LTS: "h:mm:ss", // A  8:02:18 PM
      L: "MM/DD/YYYY", //  08/16/2018
      LL: "MMMM D, YYYY", //  August 16, 2018
      LLL: "MMMM D, YYYY h:mm A", //  August 16, 2018 8:02 PM
      LLLL: "dddd, MMMM D, YYYY h:mm A", //  Thursday, August 16, 2018 8:02 PM
      l: "M/D/YYYY", //  8/16/2018
      ll: "MMM D, YYYY", //  Aug 16, 2018
      lll: "MMM D, YYYY h:mm A", //  Aug 16, 2018 8:02 PM
      llll: "ddd, MMM D, YYYY h:mm A", //Thu, Aug 16, 2018 8:02 PM
    };
    return dayjs(date).format(table[format] || format);
  };

  timeFromNow = ({ date, absolute = false, format = undefined } = {}) => {
    return format
      ? dayjs(date, format).fromNow(absolute)
      : dayjs(date).fromNow(absolute);
  };
  getDistance = (cord1, cord2) => {
    /*
        calculate distance between two points and return distance in km
       */
    if (cord1.lat === cord2.lat && cord1.lng === cord2.lng) {
      return 0;
    }

    const radlat1 = (Math.PI * cord1.lat) / 180;
    const radlat2 = (Math.PI * cord2.lat) / 180;

    const theta = cord1.lng - cord2.lng;
    const radtheta = (Math.PI * theta) / 180;

    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

    if (dist > 1) {
      dist = 1;
    }

    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344; //convert miles to km

    return dist;
  };

  navigate = (path, w) => {
    if (w) {
      window = w;
    }
    window.location.href = "#"+path;
    // return window.history.push(path);
  };

  goBack = () => {
    return window.history.go(-1);
  };

  cmpVersions = (a, b) => {
    /*
        https://stackoverflow.com/questions/6832596/how-to-compare-software-version-number-using-js-only-number
        Return values:
        - a number < 0 if a < b
        - a number > 0 if a > b
        - 0 if a = b
        */
    let i, diff;
    let regExStrip0 = /(\.0+)+$/;
    let segmentsA = a.replace(regExStrip0, "").split(".");
    let segmentsB = b.replace(regExStrip0, "").split(".");
    let l = Math.min(segmentsA.length, segmentsB.length);

    for (i = 0; i < l; i++) {
      diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
      if (diff) {
        return diff;
      }
    }
    return segmentsA.length - segmentsB.length;
  };

  uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v?.toString(16);
    });
  };

  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  lettersToNumber = (str) => {
    /*
          source: https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript
        */
    var out = 0,
      len = str.length;
    for (var pos = 0; pos < len; pos++) {
      out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    return out;
  };

  toNumber = (name) => {
    /*
          change letters to numbers 
        */
    return this.lettersToNumber(name);
  };

  getObject = (_obj, path, defaultValue = undefined) => {
    let obj = _.clone(_obj, true);
    if (!path) return obj;
    if (obj == null) return defaultValue;
    path = `${path}`.split(".");
    var current = obj;
    while (path.length) {
      if (typeof current !== "object" || typeof path !== "object")
        return defaultValue;
      if (!path || !current) return current;
      current = current[path.shift()];
    }
    if (current == null) {
      current = defaultValue;
    }
    return current;
  };

  createObject = (obj, path = null, value = null) => {
    if (path == null) {
      //then shift the variables
      obj = {};
      path = obj;
      value = path;
    }
    if (!obj) {
      obj = {};
    }
    path = typeof path === "string" ? path.split(".") : path;
    let current = obj;
    while (path.length > 1) {
      const [head, ...tail] = path;
      path = tail;
      if (!current[head]) {
        current[head] = {};
      }
      current = current[head];
    }
    current[path[0]] = value;
    return obj;
  };

  getRandomInt = (min = 1, max = 100000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  round = (value, decimals = 2) => {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  };

  getAvatarInitials = (textString, maxCount = 2) => {
    if (!textString) return "";
    const text = `${textString}`.trim();
    const textSplit = text.split(" ");
    if (textSplit.length <= 1) return text.slice(0, maxCount).toUpperCase();
    const initials =
      textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);
    return initials.toUpperCase();
  };

  stringify = (data, params = {}) => {
    const isEmpty=_.isEmpty(data);
    let link = qs.stringify(data, { arrayFormat: "bracket", ...params });
    if (params.baseURL) {
      link =!isEmpty? `${params.baseURL}${
        params.baseURL?.includes("?") ? "&" : "?"
      }${link}`:params.baseURL;
    }
    return link;
  };

  getSearchParams = (str,  params={arrayFormat: 'bracket'}) => {
    let data = {};
    if (!str) return data;
    const index = str.search(/(\?)\w+/i);
    if (index > -1) {
      data = qs.parse(str.slice(index),  params);
    } else {
      data = qs.parse(str,  params);
    }
    
    Object.keys(data).map(key=>{
      if(key.includes("/")){
        delete data[key]
      }
    })
    return data;
  };

  toTitle = (str) => {
    return `${str}`.title();
  };

  distinct = (results, path) => {
    return _.uniqBy(results, (obj) => {
      return this.getObject(obj, path);
    });
  };
  //<realm/>
  // extra starts
  extractDigits = (s, min_digit = 1, max_digit = 200) => {
    if (s == null) return null;
    s = s + ""; //cast s to string
    let numbers = s.match(
      /[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}/gi
    ); //extract digits
    if (!numbers) {
      //try another approach and get all digits in text
      numbers = [s.match(/\d/g, "")?.join(" ")];
      if (numbers[0] == undefined) {
        numbers = null;
      }
    }
    if (numbers) {
      let number = null;
      let max_digit_count = 0;
      numbers.map((item) => {
        item = item.replace(/\D/g, ""); //only return digits by replacing nodogits with empty spaces
        const item_length = item.length;
        if (item_length > max_digit_count) {
          number = item;
          max_digit_count = item_length;
        }
      });
      return number;
    }
    return null;
  };

  isNumeric = (s) => {
    //to simplify checking for phone number remove the leading +
    s = `${s}`; //cast s to string
    if (!s) return false;
    if (s && s.replace) {
      s = s.replace("+", "");
    }
    if (s == null) return false;
    s = s.trim();
    return /^\d+$/.test(s);
  };

  getNumeric = (s) => {
    if (!s) return s;
    var data = `${s}`.match(/\d+/g);
    if (data) data = data.join("");
    return data;
  };

  convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  /*
    replace any string in format {variable with a variable string}
    */
  replaceVariablesFromString = (text, dic) => {
    text = _.clone(text, true);
    if (!text) return text;
    let variables = `${text}`.match(/[^{\}]+(?=})/g); //get the variable name from a regex
    if (Array.isArray(variables)) {
      //start replacing here. A list is returned
      variables.map((variable) => {
        let variable_value = this.getObject(dic, variable); //value can be null
        text = text.replaceAll(`{${variable}}`, variable_value);
      });
      text = text.replaceAll("{", "");
      text = text.replaceAll("}", "");
      return text;
    } else {
      return text;
    }
  };

  replaceVariables = (arrayData, obj) => {
    let newArrayData = [];
    arrayData.map((element, index) => {
      let value = this.replaceVariablesFromString(element, obj);
      value = value !== "undefined" ? value?.toString() : "-";
      if (value === ",") value = "-";
      newArrayData.push(value);
    });
    return newArrayData;
  };

  truncate = ({ text, size = 160, params = {} } = {}) => {
    return _.truncate(text, {
      length: size,
      separator: "...",
      ...params,
    });
  };

  chunkString = (str, size) => {
    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);

    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = str.substr(o, size);
    }

    return chunks;
  };

  api = async ({
    link,
    authorization = "Token ",
    ignoreSearchParams = false,
    token = null,
    method = "GET",
    data = {},
    language = "en",
    stringify = true,
    contentType = "application/json",
    header = {},
  } = {}) => {
    header = {
      "Content-Type": contentType,
      Accept: "application/json",
      "Accept-Language": language,
      ...header,
    };
    if (token != null) {
      header = {
        Authorization: authorization + token,
        ...header,
      };
    }

    let headers = {};
    if (method === "GET") {
      headers = {
        method: "GET",
        headers: header,
      };
      // add the data to the url by encoding them
      if (data) {
        const qs = this.stringify(data);
        link = `${link}${link?.includes("?") ? "&" : "?"}${qs}`;
      }
    } else {
      //get any data from the URL as a hack for POST requests encoded as GET requests
      let searchParams = this.getSearchParams(link);
      // console.log("searchParams,", searchParams, "link, ", link)
      if (searchParams && !ignoreSearchParams) {
        data = { ...searchParams, ...data };
      }
      // console.log("data for post", data)
      headers = {
        method: method,
        headers: header,
        body: stringify ? JSON.stringify(data) : data,
      };
    }
    //confirm link
    if (link && !link?.startsWith("http", 0)) {
      link = url.BASE_URL + link;
    }
    return fetch(link, headers).then((response) => {
      return response.json();
    });
  };

  privateChat = async ({
    users = [],
    onSuccess,
    onError,
    params = {},
  } = {}) => {
    let names = users.map((u) => u?.username);
    names.sort();
    const name = names.join(", ");

    const data = {
      description: "private chat",
      category: "private",
      is_public: false,
      name: name,
      add_to_room: true,
      users: users.map((u) => u.id),
    };
    try {
      const room = await requests.post(`${url.chats.room}get_or_create/`, data);
      if (room?.id) {
        onSuccess({ roomID: room.id, room, ...params });
      } else {
        onError && onError(room);
      }
    } catch (error) {
      onError && onError(error);
    }
  };

  getReviews = async ({
    listing = {},
    onError,
    onSuccess,
    params = {},
  } = {}) => {
    const data = {
      description: listing?.post?.caption,
      category: "reviews",
      is_public: true,
      name: `Reviews for property ${listing.id}`,
      add_to_room: false,
      users: [],
      defaults: {
        content_type_id: listing.content_type,
        object_id: listing.id,
        data: {
          listing: listing.id,
        },
      },
    };
    try {
      const room = await requests.post(`${url.chats.room}get_or_create/`, data);
      if (room?.id) {
        onSuccess({ roomID: room.id, room, ...params });
      } else {
        onError && onError(room);
      }
    } catch (error) {
      onError && onError(error);
    }
  };

  // dynamic links
  getDynamicLink = async ({
    campaign = "invite",
    params = {},
    isUniqueCampaign = false,
  } = {}) => {
    /*
          Demo invited you to download Nibebe - for convenient commuting and carpooling Download
          generate a short link which can be shared and link users
          internalLink is a url already configured in Firebase console
        */
    const FirebaseWebApiKey = `AIzaSyCmnAGRZisbqXliLMvtrzzjH4gjsbhDJSw`;
    const appName = "instadalali";
    const firebaseAPI =
      "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" +
      FirebaseWebApiKey;
    const identifier = "com.hudumabomba.instadalali";
    const firebaseDynamicLinkPrefix = "instadalali.page.link";
    // deepLink:`https://link.nibebe.app/${internalLink}?referral=sasas`,
    const deepLink = `https://onelink.to/${appName}?campaign=${campaign}&${this.stringify(
      params
    )}`;
    const dynamicLink = {
      dynamicLinkInfo: {
        domainUriPrefix: `https://${firebaseDynamicLinkPrefix}`,
        link: deepLink,
        androidInfo: {
          androidPackageName: identifier,
        },
        iosInfo: {
          iosBundleId: identifier,
        },
      },
      suffix: {
        option: "SHORT",
      },
    };
    const res = await this.api({
      link: firebaseAPI,
      method: "POST",
      data: dynamicLink,
      ignoreSearchParams: true,
    });
    //save the referral for future use;
    return res;
  };
}

export const utils = new Actions();
