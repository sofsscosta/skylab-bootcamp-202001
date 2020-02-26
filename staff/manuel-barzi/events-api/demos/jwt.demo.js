const jwt = require('jsonwebtoken')
const atob = require('atob')

const SECRET = 'my grandmas dad had a second life'

const id = 'user-id-abc'

const token = jwt.sign({ sub: id }, SECRET, { expiresIn: '1h' })

try {
    jwt.verify(token, SECRET)
    //jwt.verify(token + '-manipulation', SECRET)

    let [, payload] = token.split('.')

    payload = JSON.parse(atob(payload))

    debugger
} catch (error) {
    debugger
}