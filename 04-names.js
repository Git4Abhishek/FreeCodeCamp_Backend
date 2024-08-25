
// We can choose which thing not to export and which thing to export..
const secret = "This is a special secret, don't share it with anyone.."
const pin = 12345
const john = "John Walker"
const kylie = "Kylie Jenner"
const travis = "Travis Head"

// console.log(module);
module.exports = {john, travis}

// module.exports has become like the following...
// { john: 'John Walker', travis: 'Travis Head' }

console.log(module.exports);
module.exports.kylie = kylie    // adding a property to the exports object..

