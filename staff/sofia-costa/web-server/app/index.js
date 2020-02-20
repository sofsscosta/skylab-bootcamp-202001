const express = require('express')
const path = require('path')
const fs = require('fs')
const logger = require('./utils/logger')
const staticMidWare = require('./utils/static-mid-ware')
const bodyParser = require('./utils/body-parser')
const users = require('./data')
const register = require('./logic/register')
const authenticate = require('./logic/authenticate')
const loggerMidWare = require('./utils/logger-mid-ware')
const retrieveUser = require('./logic/retrieve-user')

const {argv: [, , port = 8080]} = process

const app = express()

app.use(loggerMidWare)

app.use(express.static(path.join(__dirname,'public')))

app.post('/login', bodyParser, (req, res) => {

    try {
        const {username, password} = req.body
        authenticate(username, password)

        debugger

        const user = retrieveUser(username)
        
        res.send(`<h1>Welcome ${user.name} ${user.surname}!</h1>`)

    } catch (error) {
        res.status(400).send(`<h1>400 ${error.message}</h1> \n <a href="/login.html">Go To Login</a> \n <a href="/register.html">Go To Register</a>`)
    }
})

app.post('/register', bodyParser, (req, res) => {

    try {
        const {name, surname, username, password} = req.body
        register(name, surname, username, password)
        
        //res.redirect('/login.html')

    } catch (error) {
        res.status(400).send(`<h1>400 ${error.message}</h1> \n <a href="/login.html">Go To Login</a> \n <a href="/register.html">Go To Register</a>`)
    }

    res.sendFile(path.join(__dirname + '/public/login.html'))
})

process.on('SIGINT', () => {
    process.exit(0)
})

app.listen('8080', () => logger.info(`Example app listening on port ${8080}!`))

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