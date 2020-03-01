const { database } = require('../data')

module.exports = () => {

    const events = database.collection('events')

    let lastEvents = []

    //     return events.find().sort({ created: -1 }).toArray()
    //         .then(events => {return events})
    // }

    const cursor = events.find().sort({ created: -1 });

    return (function print() {
        return cursor
            .hasNext()
            .then(hasNext => hasNext && cursor.next())
            .then(result => result && lastEvents.push(result) && print())
            .then(() => lastEvents)
    })()
}

    // return cursor
    //     .then(() => lastEvents)