var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var BRZ = require('browzection2.js');

var cls = $('html').attr('class'),
    split = cls.split(' '),
    elem = '';

for (var i = 0, iLen = split.length; i < iLen; i++) {
  var obj = split[i];
  if (obj === '') continue;

  var _cls = /no-/.test(obj) ? '' : ' class="true"';

  elem += '<li' + _cls + '>' + obj + '</li>';
}

$('#add-class').html(elem);

// get browzection2
var prefix = 'BRZ';
elem = '';

for (var key in BRZ) {
  var _temp = BRZ[key];

  switch (typeof _temp === 'undefined' ? 'undefined' : _typeof(_temp)) {
    case 'object':
      for (var v in _temp) {
        var temp_obj = _temp[v],
            property = prefix + '.' + key + '.' + v + ':',
            _cls2 = temp_obj ? ' class="true"' : '';

        elem += '<li' + _cls2 + '>' + (property + temp_obj) + '</li>';
      }
      break;
    case 'string':
      elem += '<li>' + prefix + '.' + key + ':' + _temp + '</li>';
      break;
  }
}

$('#detection').html(elem);