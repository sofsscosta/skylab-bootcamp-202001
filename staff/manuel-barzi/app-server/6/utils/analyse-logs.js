const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, `..${path.sep}server.log`))

rs.setEncoding('utf8')

let count = 0

rs.on('data', chunk => {
    const lines = chunk.split('\n')

    count += lines.reduce((accum, line) => line.includes('192.168.0.50') ? ++accum : accum, 0)

})

rs.on('end', () => console.log(count))