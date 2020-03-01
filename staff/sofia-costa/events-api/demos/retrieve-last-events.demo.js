const { retrieveLastEvents } = require('../logic')
debugger
retrieveLastEvents()
    .then(events => console.log(events))
    .catch(error => console.error(error))