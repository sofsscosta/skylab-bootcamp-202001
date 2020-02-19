const net = require('net')

let sessions = {}

const server = net.createServer( socket => {
    
	socket.on('data', chunk => {

        const alreadyExists = (() => {

            for (const user in sessions) {

                if(socket === sessions[user])
                    return true
            }

            return false
        })()

        const sender = (() => {
            for (user in sessions) {
                if(sessions[user] === socket)
                    return user
            }
        })()

        if (!alreadyExists) sessions[chunk.toString()] = socket

        else {
            const [message, user] = chunk.toString().split('->')

            if (user) {
    
                const _socket = sessions[user.trim()]
    
                if (_socket) _socket.write(`${sender}: ${message}`)
    
                else socket.write('ERROR user is not online')

            }

            else {
                
            }

        }
    })
})

server.listen(8080)