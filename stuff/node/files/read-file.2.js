const fs = require('fs')

// $ node read-file <file>

const { argv: [, , file] } = process

console.log('before reading', process.memoryUsage())

fs.readFile(file, (error, content) => { // WARN buffering
    if (error) throw error

    console.log(content)

    console.log('after reading', process.memoryUsage())
})

// try {
//     const content = fs.readFileSync(file) // WARN! blocking
//     console.log(content)
// } catch (error) {
//     console.error(error)
// }

console.log('continue')