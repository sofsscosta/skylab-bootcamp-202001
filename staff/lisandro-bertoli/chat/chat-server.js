const net = require('net')
const clients = {}

const server = net.createServer(socket => {
    socket.on('data', chunk => {

        const alreadyExists = (() => {
            for (const user in clients) {
                if (socket === clients[user])
                    return true
            }

            return false
        })();

        if (!alreadyExists) {
            clients[chunk.toString()] = socket
        } else {
            const [user, message] = chunk.toString().split(':')

            const _socket = clients[user]

            if (_socket) _socket.write(message)
            else socket.write('Error, user is not online')
        }
    })
})



server.listen(8080)


// if (typeof module !== 'undefined')
//     module.exports = chatServer







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