module.exports = (function(ua){
  'use strict';
  
  console.log('aaa');
  return {
    aaa: '1',
    bbb: 'test'
  };
})(window.navigator.userAgent.toLowerCase());