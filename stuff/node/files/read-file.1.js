const fs = require('fs')

// $ node read-file <file>

const { argv: [, , file] } = process

// fs.readFile(file, 'utf8', (error, content) => {
//     if (error) throw error

//     console.log(content)
// })

const content = fs.readFileSync(file, 'utf8')
console.log(content)

console.log('continue')