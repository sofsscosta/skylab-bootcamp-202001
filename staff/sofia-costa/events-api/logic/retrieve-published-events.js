const { validate } = require('events-utils')
const { models: { Event } } = require('events-data')

module.exports = (id) => {

    validate.string(id, 'id')

    return Event.find({ publisher: id }).lean()
        .then(events => {
            let id, publisher, subscriberId
            events.map(event => {

                id = event._id.toString()
                publisher = event.publisher.toString()

                event.id = id
                event.publisher = publisher

                delete event._id
                delete publisher

                if(event.subscribers)
                    event.subscribers.map(subscriber => {
                        subscriberId = subscriber.toString()
                        subscriber = subscriberId
                    })

            })
            return events
        })
        .then(events => events)
}