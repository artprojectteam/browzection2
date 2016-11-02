require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"browzection2.js":[function(require,module,exports){
/*!
Now access browser information add html class
@uri: https://github.com/artprojectteam/browzection2
 
Copyright (c) 2016 Nobuyuki Kondo All Rights Reserved.
This software is released under the MIT License, see LICENSE
 */
module.exports = function (ua, appV) {
  'use strict';

  var isEdge = isIndexSearch('edge'),
      isChrome = isIndexSearch('chrome'),
      isSafari = isIndexSearch('safari'),
      isMobile = isIndexSearch('mobile'),
      isAndroid = isIndexSearch('android'),
      isLikeMacOS = isIndexSearch('like mac os x');

  var no_suffix = 'no-';
  var $html_class = [];

  /** IE */
  var ie = {
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
  var browser = {
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
  var engine = {
    webkit: isIndexSearch('webkit/'), // Safari, Chrome
    gecko: isIndexSearch('gecko/') || isIndexSearch('fxios/') // Firefox(FxiOSはiOS版firefox)
  };

  setupClasses(engine);

  /** TABLET */
  var tablet = {
    iPad: isIndexSearch('ipad'),
    androidTablet: isAndroid && !isMobile || isIndexSearch('a1_07') || isIndexSearch('sc-01c') // A1-07, SC-01C is Tablet, But wrote "mobile"(2013.02 Now)
  };

  setupClasses(tablet);

  /** MOBILE */
  var mobile = {
    iPhone: isIndexSearch('iphone'),
    iPod: isIndexSearch('ipod'),
    android: isAndroid && isMobile && !tablet.androidTablet
  };

  setupClasses(mobile);

  /** DEVICE */
  var device = {
    tablet: isBoolean(tablet),
    mobile: isBoolean(mobile),
    desktop: true
  };
  device.desktop = !device.tablet && !device.mobile;

  setupClasses(device);

  /** OS */
  var os = {
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

  $html_class.push('js');

  // <html> add class
  var cls = $html_class.join(' '),
      html = document.getElementsByTagName('html');

  html[0].className += ' ' + cls;

  /**
   * 文字列検索(UA)
   * @param str {string}
   * @returns {boolean}
   */
  function isIndexSearch(str) {
    return ua.indexOf(str) > 0;
  }

  /**
   * 文字列検索(App Version)
   * @param str
   * @returns {boolean}
   */
  function isAppVersionSearch(str) {
    return appV.indexOf(str) > 0;
  }

  /**
   * Object Merge
   * @returns {object}
   */
  function arrayMerge() {
    var args = Array.prototype.slice.call(arguments),
        res = {};

    var _loop = function _loop() {
      var obj = args[i];
      Object.keys(obj).forEach(function (r) {
        if (obj.hasOwnProperty(r)) res[r] = obj[r];
      });
    };

    for (var i = 0, iLen = args.length; i < iLen; i++) {
      _loop();
    }

    return res;
  }

  /**
   * Object is one or more true
   * @param obj {object}
   * @returns {boolean}
   */
  function isBoolean(obj) {
    for (var key in obj) {
      if (obj[key] === true) return true;
    }
    return false;
  }

  /**
   * html_class push
   * @param obj
   */
  function setupClasses(obj) {
    Object.keys(obj).forEach(function (keys) {
      var target = obj[keys],
          res = target ? keys : no_suffix + keys;

      $html_class.push(res);
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
}(window.navigator.userAgent.toLowerCase(), window.navigator.appVersion.toLowerCase());

},{}]},{},["browzection2.js"]);
