const registerUser = require('./register-user')
const { fetch } = require('../utils')
require('../specs/specs-helper')

describe('registerUser', () => {
    let name, surname, username, password

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
    })

    it('should succeed on new user', () => 
        registerUser(name, surname, username, password)
            .then(response => {
                expect(response).toBeUndefined()
            })
    )

    describe('when user already exists', () => {
        beforeEach(() => {
            return fetch(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, surname, username, password })
            })
                .then(response => {
                    if (response.content) {
                        const { error } = JSON.parse(response.content)

                        if (error) throw new Error(error)
                    }
                })
        })

        it('should fail on already existing user', () => {
            return registerUser(name, surname, username, password)
                .then(() => { throw new Error('should not reach this point') })
                .catch(error => {

                    expect(error).toBeDefined()
                    expect(error.message).toBe(`user with username "${username}" already exists`)
                })
        })
    })

    afterEach(() =>
        fetch(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
            .then(response => {
                const { error: _error, token } = JSON.parse(response.content)

                if (_error) throw new Error(_error)

                return fetch(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ password })
                })
                    .then(response => {
                        if (response.content) {
                            const { error } = JSON.parse(response.content)

                            if (error) throw new Error(error)
                        }
                    })
            })
    )
})