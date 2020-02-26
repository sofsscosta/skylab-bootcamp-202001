require('../utils/array.prototype.random')
const { fetch } = require('../utils')
const retrieveVehicle = require('./retrieve-user')
require('../specs/specs-helper.js')

describe('retrieveVehicle', () => {

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

        it('should succeed on matching vehicle id', () => {
            const ids = ['FYF46', 'FYF93', 'FYD43', 'FYD16', 'FYC00', 'FYC05', 'FYF75', 'FYB99', 'FYC82', 'FYD62', 'FYD19', 'FYC38', 'FYC55', 'FYD18', 'FJW82', 'FYG57', 'FYD55', 'FYD65', 'FJY64', 'FJY65']
    
            const id = ids.random()
    
            return retrieveVehicle(token, id)
                .then(vehicle => {
                    expect(vehicle).not.toBeInstanceOf(Error)
    
                    expect(vehicle.id).toBe(id)
                    expect(typeof vehicle.name).toBe('string')
                    expect(typeof vehicle.year).toBe('number')
    
                })
        })

        it('should return null on non-matching vehicle id', () => {
            const id = 'non-valid-id'
    
            return retrieveVehicle(token, id)
            .then(vehicle => {
    
                expect(vehicle).not.toBeInstanceOf(Error)
    
                expect(vehicle).toBeNull()
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

        it('should succeed on matching vehicle id', () => {
            const ids = ['FYF46', 'FYF93', 'FYD43', 'FYD16', 'FYC00', 'FYC05', 'FYF75', 'FYB99', 'FYC82', 'FYD62', 'FYD19', 'FYC38', 'FYC55', 'FYD18', 'FJW82', 'FYG57', 'FYD55', 'FYD65', 'FJY64', 'FJY65']
    
            const id = ids.random()
    
            return retrieveVehicle(undefined, id)
                .then(vehicle => {
                    expect(vehicle).not.toBeInstanceOf(Error)
    
                    expect(vehicle.id).toBe(id)
                    expect(typeof vehicle.name).toBe('string')
                    expect(typeof vehicle.year).toBe('number')
    
                })
        })

        it('should return null on non-matching vehicle id', () => {
            const id = 'non-valid-id'
    
            return retrieveVehicle(undefined, id)
            .then(vehicle => {
    
                expect(vehicle).not.toBeInstanceOf(Error)
    
                expect(vehicle).toBeNull()
            })
        })
    })
})