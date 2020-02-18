const net = require('net')
const readline = require('readline')

const {argv:[,, host, port, name]} = process

const socket = net.createConnection({host, port})

socket.write(name)

socket.on('data', chunk => {
    console.log(chunk.toString())
})

// here manu

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(function ask() {
    rl.question('~', userMessage => {
        socket.write(userMessage)

        ask()
    })
})()