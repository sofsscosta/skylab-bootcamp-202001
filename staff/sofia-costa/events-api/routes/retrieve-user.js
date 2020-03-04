// TODO jwt.verify(token)

const { retrieveUser } = require('../logic')
const { NotFoundError, NotAllowedError } = require('events-errors')

module.exports = (req, res) => {
    // const [, token] = req.get('Authorization').split(' ')
    const { payload: { sub: id } } = req

    try {
        retrieveUser(id)
            .then(user => {

                res.status(200).json(user)
            })
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