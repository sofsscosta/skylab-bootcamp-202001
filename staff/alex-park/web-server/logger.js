function log(level, message) {
    const fs = require('fs')
    fs.writeFile('./server.log', `${level} (${new Date}): ${message}\n`, { encoding: 'utf8', flag: 'a' }, error => {
        if (error) console.error(error)
    })
}

module.exports = {
    __debugEnable__ = false,
    setDebugEnable(enable) {
        this.__debugEnable__ = enable
    },
    debug(message) { log('DEBUG', message) },
    info(message) { log('INFO', message) },
    warn(message) { log('WARN', message) },
    error(message) { log('ERROR', message) },
    fatal(message) { log('FATAL', message) }
}