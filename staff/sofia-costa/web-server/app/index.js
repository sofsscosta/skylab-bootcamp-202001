const express = require('express')
const path = require('path')
const { logger, loggerMidWare, cookieParserMidWare } = require('./utils')
const bodyParser = require('body-parser')
const { sessions } = require('./data')
const { Landing, Login, Register, Home, App } = require('./components')
const { authenticate, register, retrieveUser } = require('./logic')

const urlencodedBodyParser = bodyParser.urlencoded({ extended: false })

const { argv: [, , port = 8080] } = process

logger.level = logger.DEBUG
logger.path = path.join(__dirname, 'server.log')
logger.debug('setting up server')

const app = express()

app.use(loggerMidWare)
app.use(cookieParserMidWare)
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send(App({ title: 'SoDaFede', body: Landing() }))
})

app.get('/login', (req, res) => {

    const { cookies: { username } } = req

    if (sessions.includes(username)) return res.redirect(`/home/${username}`)

    res.send(App({ title: 'login', body: Login() }))
})

app.use(urlencodedBodyParser)

app.get('/register', (req, res) => {
    res.send(App({ title: 'register', body: Register() }))
})

app.get('./home/:username', (req, res) => {

    const { params: { username } } = req

    if (sessions.includes(username)) {
        const { name } = retrieveUser(username)

        const { cookies: { username: _username } } = req

        username !== _username && res.setHeader('set-cookie', `username=${username}`)

        res.send(App({ title: 'home', body: Home({ name, username }) }))

    } else res.redirect('/login')
})


app.post('/logout', (req, res) => {
    const { body: { username } } = req

    const index = sessions.indexOf(username)

    sessions.splice(index, 1)

    res.clearCookie('username')

    res.redirect('/login')
})

app.post('/login', bodyParser, (req, res) => {

    const { username, password } = req.body

    try {
        debugger
        authenticate(username, password)

        sessions.push(username)

        const { cookies: { username: _username } } = req

        username !== _username && res.setHeader('set-cookie', `username=${username}`)

        res.redirect(`/home/${username}`)

    } catch ({ message }) {

        res.send(App({ title: 'login', body: Login({ error: message }) }))
    }
})

app.post('/register', bodyParser, (req, res) => {

    const { name, surname, username, password } = req.body

    try {
        register(name, surname, username, password)

        res.redirect('/login')

    } catch ({ message }) {

        res.send(App({ title: 'register', body: Register({ error: message }) }))
    }

})

app.listen(port, () => logger.info(`Example app listening on port ${port}!`))

process.on('SIGINT', () => {
    logger.warn(`server abruptly stopped`)

    process.exit(0)
})

// app.get('/login', (req, res) => {

//     try {
//         fs.readFile(path.join(__dirname, './public/login.html'), (error, data) => {
//             let html = data.toString()
//             res.status(200).send(html)
//         })
//     } catch (error) {
//         res.status(400).send(`<h1>${error.message}</h1>`)
//     }
// })

// app.get('/register', (req, res) => {
//     try {
//         fs.readFile(path.join(__dirname, './public/register.html'), (error, data) => {
//             let html = data.toString()
//             res.status(200).send(html)
//         })
//     }
//     catch(error) {
//         res.status(400).send(`<h1>${error.message}</h1>`)
//     }
// })

// module.exports = {
//     authUser,
//     registerUser,
//     renderRegister,
//     renderLogin
// }


// app.post('/welcome', (req, res) => {
//     try {
//         fs.readFile(path.join(__dirname, './public/welcome.html'), (error, data) => {

//             let html = data.toString().replace('{name}', username)
//             res.status(200).send(html)

//         })
//     } catch (error) {
//         res.status(401).send("<h1>401, Wrong Credentials!</h1>")
//     }
// })