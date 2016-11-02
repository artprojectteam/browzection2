const BRZ = require('browzection2.js');

let cls = $('html').attr('class'),
  split = cls.split(' '),
  elem = '';

for(var i = 0, iLen = split.length; i < iLen; i++){
  let obj = split[i];
  if(obj === '') continue;
  
  let cls = /no-/.test(obj) ? '' : ' class="true"';
  
  elem += `<li${cls}>${obj}</li>`;
}

$('#add-class').html(elem);


// get browzection2
const prefix = 'BRZ';
elem = '';

for(var key in BRZ){
  let _temp = BRZ[key];
  
  switch(typeof _temp){
    case 'object':
      for(var v in _temp){
        let temp_obj = _temp[v],
          property = `${prefix}.${key}.${v}:`,
          cls = temp_obj ? ' class="true"' : '';
        
        elem += `<li${cls}>${property + temp_obj}</li>`;
      }
      break;
    case 'string':
      elem += `<li>${prefix}.${key}:${_temp}</li>`;
      break;
  }
}

$('#detection').html(elem);