// Example of Synchronous JS (Blocking JS)

const { readFileSync, writeFileSync } = require('fs')

console.log("this task start");

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(`Here is the result: ${first, second}`)
console.log(`Here is the result: ${first}, ${second}`)

// writeFileSync('./content/result-sync.txt', `Here is the result: ${first, second}`)
// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a'}    // It is used for appending the text..
)

console.log("this task done")
console.log("start another task")