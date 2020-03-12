const { retrieveItemLands } = require('../logic')
const { NotFoundError, NotAllowedError } = require('errors')

module.exports = (req, res) => {
    const { payload: { sub: userId }, body: { item: itemId } } = req

    try {
        retrieveItemLands(userId, itemId)
            .then(item => res.status(200).json(item))
            .catch(({ message }) =>
                res
                    .status(401)
                    .json({
                        error: message
                    })
            )
    } catch (error) {

        let status = 400

        switch (true) {
            case error instanceof NotFoundError:
                status = 401
                break
            case error instanceof NotAllowedError:
                status = 403
        }

        const { message } = error

            res
                .status(status)
                .json({
                    error: message
                })
    }
}