const fs = require('fs')

// $ node read-file <file>

const { argv: [, , file] } = process

console.log('before reading', process.memoryUsage())

const rs = fs.createReadStream(file)

rs.on('data', chunk => console.log(chunk))

rs.on('end', () => console.log('after reading', process.memoryUsage()))

rs.on('error', error => { console.error(error); debugger })

console.log('continue')