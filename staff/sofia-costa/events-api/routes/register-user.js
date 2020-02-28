const { registerUser } = require('../logic')
const { ConflictError } = require('../errors')

module.exports = (req, res) => {
    const { body: { name, surname, email, password } } = req

    try {
        registerUser(name, surname, email, password)
            .then(() => res.status(201).end())
            .catch(({ message }) =>
                res
                    .status(409)
                    .json({
                        error: message
                    })
            )
    } catch (error) {

        let status = 400

        if (error instanceof ConflictError) status = 409

        const { message } = error

        res
            .status(status)
            .json({
                error: message
            })
    }
}