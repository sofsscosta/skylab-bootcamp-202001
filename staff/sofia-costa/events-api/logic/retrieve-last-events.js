const { models: { Event } } = require('../data')

module.exports = () => {

    let lastEvents = []
    debugger

    // const cursor = 
    
    return Event.find().sort({ created: -1 })
    // return (function print() {
    //     return cursor
    //         .hasNext()
    //         .then(hasNext => hasNext && cursor.next())
    //         .then(result => result && lastEvents.push(result) && print())
    //         .then(() => lastEvents)
    // })()
}
