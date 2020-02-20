let users = require('../data')
const retrieveUser = require('./retrieve-user')

describe('retrieveUser', () => {
    let name, surname, username

    beforeEach(() => {
        let user = {
            name:'name-' + Math.random(),
            surname: 'surname-' + Math.random(),
            username:'username-' + Math.random()
        }
        const {username} = user
    })

    describe('when user already exists', () => {
        beforeEach( users.push(user))

        it('should succeed', () =>
            retrieveUser((username) => {

                expect(user).toBeDefined()

                const VALID_KEYS = ['name', 'surname', 'username']
                Object.keys(user).forEach(key => VALID_KEYS.includes(key))
                
                expect(user.name).toBe(name)
                expect(user.surname).toBe(surname)
                expect(user.username).toBe(username)
                expect(user.password).toBeUndefined()
            })
        )

        afterEach( () => users.splice(user.indexOf(user), 1))
    })

    it('should fail on non-string username', () => {

        expect(retrieveUser(true)).toThrowError(TypeError, `user true is not a string`)
        expect(retrieveUser([])).toThrowError(TypeError, `user [] is not a string`)
    })
})