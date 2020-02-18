const fs = require('fs')

// $ node write-file <text> <file>

const { argv: [, , text, file] } = process

// fs.writeFile(file, text, error => {
//     if (error) throw error

//     console.log('file written')
// })

try {
    fs.writeFileSync(file, text)
    console.log('file written')
} catch (error) {
    console.error(error)
}

console.log('continue')
