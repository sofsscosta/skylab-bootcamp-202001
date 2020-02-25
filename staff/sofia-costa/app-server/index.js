const express = require('express')
const { logger, loggerMidWare } = require('./utils')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
// const FileStore = require('session-file-store')(session)
const { landing, login, home, loginPost, logout, register, registerPost, acceptCookies, search, details, goBack, toggleFav, favList, error } = require('./routes')

const urlencodedBodyParser = bodyParser.urlencoded({ extended: false })

const { argv: [, , port = 8081] } = process

logger.level = logger.DEBUG
logger.path = path.join(__dirname, 'server.log')

logger.debug('setting up server')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'components'))

app.use(loggerMidWare)
app.use(express.static(path.join(__dirname, 'public')))
app.use('/components', express.static(path.join(__dirname, 'components')))
app.use(session({ 
    secret: 'keyboard cat', 
    cookie: { maxAge: 600000 }, 
    resave: false, 
    saveUninitialized: true,
    // store: new FileStore({}) 
}))

app.get('/', home)

app.get('/login', login)

app.post('/login', urlencodedBodyParser, loginPost)

//app.get(`/home/:username/`, home)

app.get(`/search`, search)

app.get('/favourites/:name', favList)

app.post('/toggle-fav/:id', urlencodedBodyParser, toggleFav)

app.get('/details/:id', details)

app.get('/go-back', goBack)

app.post('/logout', urlencodedBodyParser, logout)

app.post('/register', urlencodedBodyParser, registerPost)

app.get('/register', register)

app.post('/accept-cookies', acceptCookies)

app.get('/error', error)

app.listen(port, () => logger.info(`server up and running on port ${port}`))

process.on('SIGINT', () => {
    logger.warn(`server abruptly stopped`)

    process.exit(0)
})