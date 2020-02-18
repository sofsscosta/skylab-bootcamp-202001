function log(level, message) {
    const fs = require('fs')
    fs.appendFile('server.log', `${level}: ${message}\n`, 'utf8', error => {
        if (error) throw error
    })
}

module.exports = {
    debug(message) { log('DEBUG', message) },
    info(message) { log('INFO', message) },
    warn(message) { log('WARN', message) },
    error(message) { log('ERROR', message) },
    fatal(message) { log('FATAL', message) }
}