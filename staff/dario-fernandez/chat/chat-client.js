const net = require('net')
const readline = require('readline')

const { argv: [, , host, port, nick] } = process

const socket = net.createConnection({ host, port })

socket.write(nick)

socket.on('data', chunk => {
    console.log('\n' + chunk.toString())
})

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
