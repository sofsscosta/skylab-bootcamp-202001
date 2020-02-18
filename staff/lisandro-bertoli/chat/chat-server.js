const net = require('net')

const clients = {}

const server = net.createServer(socket => {
    socket.on('data', chunk => {
        let user = chunk.toString().split(':')[0]
        clients[user] = socket

        console.log(chunk.toString())

        for (user in clients) {
            clients[user].write(`${chunk.toString()}`)
        }
    })
})
server.listen(8080)











// const net = require('net')

// const clients = {}

// const server = net.createServer(socket => {
//     socket.on('data', chunk => {

//         const userName = chunk.toString().split(':')[0]

//         console.log(chunk.toString())

//         clients[userName] = socket

//         for (client in clients) {
//             clients[client].write(chunk.toString())
//         }

//     })

// })


// server.on('error', error => {
//     throw error
// })


// server.listen(8080, () => {
//     console.log('server listening')
// })