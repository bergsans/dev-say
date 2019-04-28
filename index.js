const log = console.log.bind(console);

console.set_default_logstyle = function(styles = '') {
  console.log = (...args) => args.forEach((arg) => log(`%c ${arg}`, styles));
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
  console.set_default_logstyle('font-size: 16px;');
  for (let key in objectToLoop) {
    if (!Array.isArray(objectToLoop[key])
        && typeof objectToLoop[key] == 'object'

      ) { // && objectToLoop[key] !== null
      output(key, typeof objectToLoop[key], level);
      console.log_obj_tree(objectToLoop[key], level + 1);
    } else if(Array.isArray(objectToLoop[key])) {
      output(key, typeof objectToLoop[key], level);
      console.log_obj_tree(objectToLoop[key], level + 1);
    } else if(typeof objectToLoop[key] === 'string') {
      /*
      let output =  level > 0? `${'   '.repeat(level)}+--` : '';
      output += `+ [${key}]: ${objectToLoop[key]} <string>`;
      console.log(output);
      */
      output(key, typeof objectToLoop[key], level, objectToLoop[key]);
    } else if(typeof objectToLoop[key] === 'number') {
      output(key, typeof objectToLoop[key], level, objectToLoop[key]);
    } else if(typeof objectToLoop[key] === 'undefined') {
      output(key, typeof objectToLoop[key], level, objectToLoop[key]);
    } else if(objectToLoop[key] === 'null') {
      output(key, typeof objectToLoop[key], level, objectToLoop[key]);
    } else if(typeof objectToLoop[key] === 'function') {
      output(key, typeof objectToLoop[key], level, objectToLoop[key]);
    } else if(typeof objectToLoop[key] === 'boolean') {
      output(key, typeof objectToLoop[key], level, objectToLoop[key]);
    } else if(typeof objectToLoop[key] === 'symbol') {
      output(key, typeof objectToLoop[key], level, 'Symbol value');
    }
  }
}

function output(key, type, level, value = '') {
  let output = level > 0? `${'   '.repeat(level)}+--` : '';
  output += `+ [${key}]: ${value} <${type}>`;
  console.log(output);
}
