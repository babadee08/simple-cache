const { createServer } = require('http')
const { sleep } = require('sleep')

const cache = new Map();

createServer((req, res) => {

    if (!cache.has('alreadyRunned')) {
        sleep(3)
        cache.set('alreadyRunned', true)
      }

    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello, World!')
}).listen(8080)

console.log('Listening to port 8080')
