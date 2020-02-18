let net = require('net')
let sockets = []
var id = 0
var port = 9000
var message;
let server = net.createServer(socket => {
  id++
  socket.name = false
  var idS = socket.id = id
  sockets.push(socket)
  const address = socket.remoteAddress.split(':')[3]
  socket.write(`Welcome ip ${address}, write your name: `)
  socket.on('data', data => {
    const {name} = socket
    if (!name) socket.name = data.toString().trim();
    message = name ? `${name}: ${data.toString().trim()}\n` : data.toString()
    name ? broadcast(idS, message) : ''
    process.stdout.write(message) // print in server
  })
})
const broadcast = (id, message) => {
  sockets.forEach(socket => {
    if (socket.id !== id)
      socket.write(message)
  })
}
server.listen(port, () => console.log(`server running on port ${port}`))