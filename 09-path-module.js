const path = require('path')

console.log(path.sep)

const filePath1 = path.join('hij', 'klm', 'nop.txt')  // actually this path does'nt exist..
const filePath2 = path.join('hij', 'klm', [12], 'nop.txt')  // actually this path does'nt exist..

console.log(filePath1);
// console.log(filePath2); // will give you error..

const base = path.basename(filePath1) // returns the last portion of a path..
console.log(base)

const absolute = path.resolve(__dirname, __filename)
console.log(absolute)