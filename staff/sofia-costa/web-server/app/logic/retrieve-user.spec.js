let users = require('../data/data')
const retrieveUser = require('./retrieve-user')

describe('retrieveUser', () => {
    let name, surname, username

    beforeEach(() => {
        users.length = 0

        let user = {
            name: 'name-' + Math.random(),
            surname: 'surname-' + Math.random(),
            username: 'username-' + Math.random()
        }
        const {username} = user

        users.push(user)
    })

        it('should succeed', () =>{
            
            retrieveUser(username) 

            expect(username).toBeDefined()

            const VALID_KEYS = ['name', 'surname', 'username']
            Object.keys(user).forEach(key => VALID_KEYS.includes(key))
            
            expect(user.name).toBe(name)
            expect(user.surname).toBe(surname)
            expect(user.username).toBe(username)
            expect(user.password).toBeUndefined()
        })

    afterEach( () => users.splice(users.indexOf(user), 1))

    it('should fail on non-string username', () => {
        //expect(retrieveUser(true)).toThrowError(TypeError, `username true is not a string`)
        expect(retrieveUser(undefined)).toThrowError(TypeError, `undefined is not a string`)
    })
})