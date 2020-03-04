const { models: { Event } } = require('events-data')

module.exports = () => {

    //let lastEvents = []

    // const cursor = 
    
    return Event.find({ date: { $gte: new Date } })
        .lean()
        .then(events => {
            events.forEach(event => {
                event.id = event._id.toString()
                delete event._id
                event.publisher = event.publisher.toString()
            })
            return events
        })

        
        //.sort({ created: -1 })
    // return (function print() {
    //     return cursor
    //         .hasNext()
    //         .then(hasNext => hasNext && cursor.next())
    //         .then(result => result && lastEvents.push(result) && print())
    //         .then(() => lastEvents)
    // })()
}