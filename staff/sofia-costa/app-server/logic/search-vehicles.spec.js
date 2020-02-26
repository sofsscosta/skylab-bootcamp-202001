const searchVehicles = require('./search-vehicles')
const { fetch } = require('../utils')
require('../specs/specs-helper.js')

describe('searchVehicles', () => {

    let name, surname, username, password, token

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
    })

    describe('when user is logged in', () => {

        beforeEach(() => {
            return fetch(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, surname, username, password })
            })
                .then(response => {
                    if (response.content) {
                        const { error: _error } = JSON.parse(response.content)
                        if (_error) throw new Error(_error)
                    }

                    return fetch(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password })
                    })
                        .then(response => {

                            const { error, token: _token } = JSON.parse(response.content)

                            if (error) throw new Error(error)

                            token = _token
                        })
                }
                )
        })

        it('should succeed on matching query', () => {
            return searchVehicles(token, 'batman')
                .then(results => {
                    expect(results).toBeDefined()
                    expect(results.length).toBeGreaterThan(0)

                    results.forEach((result) => {
                        expect(typeof result.id).toBe('string')
                        expect(typeof result.name).toBe('string')
                        expect(typeof result.thumbnail).toBe('string')
                        expect(typeof result.price).toBe('number')
                    })

                })
        })

        it('should succeed on non-matching query returning an empty array', () => {
            return searchVehicles(token, 'asdasdfñlajsfklasldñkfjañlsjflasjflasjfñladjs')
                .then(results => {
                    expect(results).toBeDefined()
                    expect(results).toHaveLength(0)
                })
        })

        afterEach(() => {
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
    })

    describe('when user is not logged in', () => {

        it('should succeed on non-matching query returning an empty array', () => {
            return searchVehicles(undefined, 'asdasdfñlajsfklasldñkfjañlsjflasjflasjfñladjs')
                .then(results => {
                    expect(results).toBeDefined()
                    expect(results).toHaveLength(0)
                })
        })


        it('should succeed on matching query', () => {
            return searchVehicles(undefined, 'batman')
                .then(results => {
                    expect(results).toBeDefined()
                    expect(results.length).toBeGreaterThan(0)

                    results.forEach((result) => {
                        expect(typeof result.id).toBe('string')
                        expect(typeof result.name).toBe('string')
                        expect(typeof result.thumbnail).toBe('string')
                        expect(typeof result.price).toBe('number')
                    })

                })
        })
    })


    it('should fail on non-string query', function () {
        expect(() => {
            searchVehicles(undefined, undefined)
        }).toThrowError(TypeError, 'undefined is not a string')

        expect(() => {
            searchVehicles(undefined, 1)
        }).toThrowError(TypeError, '1 is not a string')

        expect(() => {
            searchVehicles(undefined, true)
        }).toThrowError(TypeError, 'true is not a string')

        expect(() => {
            searchVehicles(undefined, {})
        }).toThrowError(TypeError, '[object Object] is not a string')
    })
})