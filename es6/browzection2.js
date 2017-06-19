/*!
Now access browser information add html class
@uri: https://github.com/artprojectteam/browzection2

Copyright (c) 2016 Nobuyuki Kondo All Rights Reserved.
This software is released under the MIT License, see LICENSE
 */
module.exports = (function(ua, appV){
  'use strict';
  
  const isEdge = isIndexSearch('edge'),
    isChrome = isIndexSearch('chrome'),
    isSafari = isIndexSearch('safari'),
    isMobile = isIndexSearch('mobile'),
    isAndroid = isIndexSearch('android'),
    isLikeMacOS = isIndexSearch('like mac os x');
  
  const no_suffix = 'no-';
  let html_class = [];
  
  
  /** IE */
  let ie = {
    msie: isIndexSearch('msie'),
    msie6: isAppVersionSearch('msie 6.'),
    msie7: isAppVersionSearch('msie 7.'),
    msie8: isAppVersionSearch('msie 8.'),
    msie9: isAppVersionSearch('msie 9.'),
    msie10: isAppVersionSearch('msie 10.'),
    msie11: isIndexSearch('trident/7'),
    msie_edge: isIndexSearch('applewebkit') && isEdge
  };
  
  /** BROWSER */
  let browser = {
    chrome: isChrome && isSafari && !isEdge,
    safari: isSafari && !isEdge && !isChrome && !isMobile,
    mobile_safari: isSafari && isMobile && !isChrome && !isEdge,
    firefox: isIndexSearch('firefox'),
    android_default: isAndroid && !isChrome
  };
  
  // merge
  browser = arrayMerge(browser, ie);
  setupClasses(browser);
  
  
  /** BROWSER ENGINE */
  let engine = {
    webkit: isIndexSearch('webkit/'),   // Safari, Chrome
    gecko: isIndexSearch('gecko/') || isIndexSearch('fxios/')      // Firefox(FxiOSはiOS版firefox)
  };
  
  setupClasses(engine);
  
  /** TABLET */
  let tablet = {
    iPad: isIndexSearch('ipad'),
    androidTablet: (isAndroid && !isMobile) || isIndexSearch('a1_07') || isIndexSearch('sc-01c')  // A1-07, SC-01C is Tablet, But wrote "mobile"(2013.02 Now)
  };
  
  setupClasses(tablet);
  
  
  /** MOBILE */
  let mobile = {
    iPhone: isIndexSearch('iphone'),
    iPod: isIndexSearch('ipod'),
    android: isAndroid && isMobile && !tablet.androidTablet
  };
  
  setupClasses(mobile);
  
  
  /** DEVICE */
  let device = {
    tablet: isBoolean(tablet),
    mobile: isBoolean(mobile),
    desktop: true
  };
  device.desktop = !device.tablet && !device.mobile;
  
  setupClasses(device);
  
  
  /** OS */
  let os = {
    windows: isIndexSearch('windows'),
    osx: isIndexSearch('intel mac os x'),
    ios: isIndexSearch('os ') && isLikeMacOS,
    ios7: isIndexSearch('os 7_') && isLikeMacOS,
    ios8: isIndexSearch('os 8_') && isLikeMacOS,
    ios9: isIndexSearch('os 9_') && isLikeMacOS,
    ios10: isIndexSearch('os 10_') && isLikeMacOS,
    android_2_3: isIndexSearch('android 2.3'),
    android_4_0: isIndexSearch('android 4.0'),
    android_4_1: isIndexSearch('android 4.1'),
    android_4_2: isIndexSearch('android 4.2'),
    android_4_3: isIndexSearch('android 4.3'),
    android_4_4: isIndexSearch('android 4.4'),
    android_5_0: isIndexSearch('android 5.0'),
    android_5_1: isIndexSearch('android 5.1'),
    android_6_0: isIndexSearch('android 6.0')
  };
  
  setupClasses(os);
  
  html_class.push('js');
  
  // <html> add class
  let cls = html_class.join(' '),
    html = document.getElementsByTagName('html');
  
  html[0].className += ' ' + cls;
  
  
  
  /**
   * 文字列検索(UA)
   * @param str {string}
   * @returns {boolean}
   */
  function isIndexSearch(str){
    return ua.indexOf(str) > 0;
  }
  
  /**
   * 文字列検索(App Version)
   * @param str
   * @returns {boolean}
   */
  function isAppVersionSearch(str){
    return appV.indexOf(str) > 0;
  }
  
  /**
   * Object Merge
   * @returns {object}
   */
  function arrayMerge(){
    let args = Array.prototype.slice.call(arguments),
      res = {};
  
    for(var i = 0, iLen = args.length; i < iLen; i++){
      let obj = args[i];
      Object.keys(obj).forEach(r=>{
        if(obj.hasOwnProperty(r)) res[r] = obj[r];
      });
    }
    
    return res;
  }
  
  /**
   * Object is one or more true
   * @param obj {object}
   * @returns {boolean}
   */
  function isBoolean(obj){
    for(let key in obj){
      if(obj[key] === true) return true;
    }
    return false;
  }
  
  
  /**
   * html_class push
   * @param obj
   */
  function setupClasses(obj){
    Object.keys(obj).forEach(keys=>{
      let target = obj[keys],
        res = target ? keys : no_suffix + keys;
      
      html_class.push(res);
    });
  }
  
  
  return {
    ua: ua,
    app_version: appV,
    browser: browser,
    engine: engine,
    tablet: tablet,
    mobile: mobile,
    device: device,
    os: os
  };
})(window.navigator.userAgent.toLowerCase(), window.navigator.appVersion.toLowerCase());