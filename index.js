const colors = {
  colorObject: '#002db3',
  colorArray: '#FF0000',
  colorString: '#002db3',
  colorNumber: '#002db3',
  colorNull: '#002db3',
  colorUndefined: '#002db3',
  colorBoolean: '#002db3',
  colorSymbol: '#002db3',
  colorFunction: '#cc0066'
};

console.out = function(styles = '', ...args) {
  console.log(`%c${args}`, styles);
}

const longestStrInArr = (arr) => {
    let deepCopy = [...arr];
    const sortedArr = deepCopy.sort((a, b) => b.length - a.length);
    return sortedArr[0].length;
};

console.log_obj = function(obj) {
  const objectAsString = JSON.stringify(obj, null, 2);
  const lines = objectAsString.split('\n');
  const longestLine = longestStrInArr(lines);
  lines.forEach((line, i) => {
    if(i % 2 === 0) {
      console.log(`%c ${line.padEnd(longestLine + 30, ' ')}`, 'font-size: 14px; margin:0; padding:0; background-color: #242424; color: white;')
    } else {
      console.log(`%c ${line.padEnd(longestLine + 30, ' ')}`, 'font-size: 14px; background-color: #B4B4B4; margin: 0; padding:0; color: black;')
    }
  });
};

console.log_obj_tree = function(objectToLoop, level = 0) {
  for (let key in objectToLoop) {
    if(Array.isArray(objectToLoop[key])) {
      output(key, 'array', level);
      console.log_obj_tree(objectToLoop[key], level + 1);
    } else if (!Array.isArray(objectToLoop[key])
        && typeof objectToLoop[key] == 'object'
      ) {
      output(key, 'object', level, '');
      console.log_obj_tree(objectToLoop[key], level + 1);
    } else if(objectToLoop[key] === 'null') {
      output(key, 'null', level, 'null');
    } else if(typeof objectToLoop[key] === 'symbol') {
      output(key, typeof objectToLoop[key], level, 'Symbol value');
    } else {
      output(key, typeof objectToLoop[key], level, objectToLoop[key]);
    }
  }
}

function output(key, type, level, value = '') {
  let suffix = '';
  switch(type) {
    case 'array':
      suffix = `color:${colors.colorArray}; font-size: 14px; font-weight: bolder;`;
      break;
    case 'object':
      suffix = `color:${colors.colorObject}; font-size: 14px; font-weight: bolder;`;
      break;
    case 'function':
      suffix = `color:${colors.colorFunction}; font-size: 14px; font-weight: bolder;`;
      break;
    default:
      suffix = `color:black; font-size: 14px;`;
  }

  const prefix = level > 0? `%c${'   '.repeat(level)}+--` : '%c';
  const output = `${prefix}+ %c[${key}]: %c${value} %c<${type}>`;
  console.log(output, 'color: gray; font-size: 14px;', 'font-size: 14px; color: black;', value? 'color: green; font-size: 14px;' : 'font-size: 14px;', suffix);
}

module.exports = { console };
