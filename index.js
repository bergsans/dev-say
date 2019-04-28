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





console.log_obj_tree = function(objectToLoop, level = 0, representation = []) {

  for (let key in objectToLoop) {
    if (!Array.isArray(objectToLoop[key]) 
        && typeof objectToLoop[key] == 'object' 
        && objectToLoop[key] !== null
        ) {
      representation.push({step: level, name: key, type: 'object', value: 'PARENT NODE'});    
      console.log_obj_tree(objectToLoop[key], level + 1, representation);
    } else if(Array.isArray(objectToLoop[key])) {
      representation.push({step: level, name: key,type: 'array', value: 'PARENT NODE'});
      console.log_obj_tree(objectToLoop[key], level + 1, representation);
    } else {
      representation.push({step: level, name: key,type: 'primitive value', value: objectToLoop[key]});
    }
  }
  return representation;
}



