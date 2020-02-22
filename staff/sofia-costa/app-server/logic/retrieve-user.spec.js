const users = require('../data/data.js')
const retrieveUser = require('./retrieve-user.js')

describe('retrieveUser', () => {
    let name, surname, username, password
    beforeEach(function () {
        users.length = 0
        user = {
            name: 'name-' + Math.random(),
            surname: 'surname-' + Math.random(),
            username: 'username-' + Math.random(),
            password: 'password-' + Math.random()
        }
    })
    describe('when user already exists', function () {
        beforeEach(function () {
            users.push(user)
        })
        it('should succeed on correct username', () => {
            const userInfo = retrieveUser(user.username)
            expect(userInfo).not.toBe(undefined)
            expect(userInfo.name).toBe(user.name)
            expect(userInfo.surname).toBe(user.surname)
            expect(userInfo.username).toBe(user.username)
        })
        it('should fail on invalid username', () => {
            const userInfo = retrieveUser(`${user}-wrong`)
            expect(userInfo).toBe(undefined)
        })
        afterEach(() => {
            users.length = 0
        })
        it('should fail on non-string username', () => {
            username = 1
            expect(() =>
                retrieveUser(username, () => { })
            ).toThrowError(TypeError, `${username} is not a string`)
            username = true
            expect(() =>
                retrieveUser(username, () => { })
            ).toThrowError(TypeError, `${username} is not a string`)
            username = undefined
            expect(() =>
                retrieveUser(username, () => { })
            ).toThrowError(TypeError, `${username} is not a string`)
            username = null
            expect(() =>
                retrieveUser(username, () => { })
            ).toThrowError(TypeError, `${username} is not a string`)
        })
    })
})