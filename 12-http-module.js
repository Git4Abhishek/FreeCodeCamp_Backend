const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Welcome to the home page..')
    res.end()
    console.log('the will execute when a request is made')   // Why this line is printed twice per request?
})

server.listen(5000)
console.log('this will execute first..')