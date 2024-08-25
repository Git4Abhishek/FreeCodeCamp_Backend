const os = require('os')

const user = os.userInfo()
// show user information
console.log(user);

// show system uptime
console.log(`The system uptime is: ${os.uptime()} seconds.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)