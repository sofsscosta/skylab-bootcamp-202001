const { retrievePublishedEvents } = require('../logic')
const { ContentError } = require('../errors')

module.exports = (req, res) => {
    const { params: { id } } = req

    try {
        retrievePublishedEvents(id)
            .then(events => res.status(200).json(events))
            .catch(error => {
                let status = 404

                let { message } = error

                res
                    .status(status)
                    .json({
                        error: message
                    })
            }
            )
    } catch (error) {
        let status = 404

        if (error instanceof ContentError)
            status = 400 // not acceptable

        message = error.message

        res
            .status(status)
            .json({
                error: message
            })
    }
}