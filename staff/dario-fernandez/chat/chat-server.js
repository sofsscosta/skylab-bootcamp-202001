const net = require('net')

const sessions = {}

const server = net.createServer(socket => {
    socket.on('data', chunk => {
        const alreadyExists = (() => {
            for (const user in sessions)
                if (socket === sessions[user]) {
                    return true
                }

            return false
        })()

        const sender = (() => {
            for(user in sessions) {
                if(sessions[user] === socket) {
                    return user.toString()
                }
            }
        })()

        if (!alreadyExists)
            sessions[chunk.toString().trim()] = socket
        else {
            const [message, user] = chunk.toString().split('->')

            const _socket = sessions[user.toString().trim()]

            if (_socket) _socket.write(`${sender}: ${message}`)
            else socket.write('ERROR user is not online')
        }
    })
})

server.listen(8080)