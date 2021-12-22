import {utils} from './utils';
export const appName='Instadalali';
export const config = {
  API_URL: 'http://instadalali.com:8009',
  // API_URL: 'http://127.0.0.1:8000',
}; 
export const priceSliderScale={
  minFactor:1e2,
  getMinValue:(x, a=350)=>{
    const maxFactor = 1e4;
    const minFactor = 1e2;
    if(!x) x=0;
    const b=(maxFactor/minFactor);
    return x*minFactor*(b*(1-Math.exp((-1*x/a))));
  },
  getMaxValue:(x, a=350)=>{
    if(!x) x=0;
    const maxFactor = 1e4;
    return x*maxFactor;
  },
  maxFactor:1e4
};

export const font={
  light:   "Helvetica",
  medium:   "Helvetica",
  regular:  "Helvetica",
  bold:     "Helvetica",
};

export const url={
  BASE_URL:config.API_URL,
  socket:'https://socket.hudumabomba.com',
  // 
  search: '/api/v1/search/',
  location: '/api/v1/location/',
  postSidecarNode: '/api/v1/postSidecarNode/',
  postComment: '/api/v1/postComment/',
  like:     '/api/v1/like/',
  profile: '/api/v1/profile/',
  post:    '/api/v1/post/',
  hashtag: '/api/v1/hashtag/',
  device: '/api/v1/device/',
  // auth
  login:'/api/v1/auth/login/',
  logout:'/api/v1/auth/logout/',
  register:'/api/v1/register/',
  user: '/api/v1/auth/user/',
  // pasword
  // extra
  tnc:    'https://instadalali.com/tnc',
  privacy:'https://instadalali.com/privacy',
  //extra
  appinfo:"https://lipabomba.com/appinfo/",
  videoPoster:'https://www.talent-100.com.au/wordpress/wp-content/uploads/2016/08/video-placeholder.jpg',
  //end extra
    
  password:{
    reset:          '/api/v1/auth/password/reset/', /*POST: email*/
    resetConfirm:   '/api/v1/auth/password/reset/confirm/',
    change:         '/api/v1/auth/password/change/',
  },
  dalali:{
    listing:      '/dalali/api/v1/listing/',
    wishlist:     '/dalali/api/v1/wishlist/',
    profileclaim: '/dalali/api/v1/profileclaim/',
    virtualtour: '/dalali/api/v1/virtualtour/',
    imagesearch: '/dalali/api/v1/imagesearch/',
  },
  chats:{
    room:      '/chats/api/v1/room/',
    message:     '/chats/api/v1/message/',
  },
  getURL:(path, {item={id:0}, type='detail'}={})=>{
    const base=utils.getObject(url, path);
    let link=base;
    if(['detail', 'delete', 'edit', 'view'].includes(type)){
      link=`${base}{id}/`;
    }
    return utils.replaceVariablesFromString(link, item);
  }
};
