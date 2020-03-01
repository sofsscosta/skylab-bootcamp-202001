const { retrieveSubscribedEvents } = require('../logic')
const { ContentError } = require('../errors')

module.exports = (req, res) => {
    const { payload: { sub: userId } } = req

    try {
        retrieveSubscribedEvents(userId)
            .then(events => res.status(201).json(events))
            .catch(error => {
                let status = 400

                let { message } = error

                res
                    .status(status)
                    .json({
                        error: message
                    })
            })
            
    } catch (error) {
        let status = 400

        if (error instanceof TypeError || error instanceof ContentError)
            status = 406 // not acceptable

        message = error.message

        res
            .status(status)
            .json({
                error: message
            })
    }
}