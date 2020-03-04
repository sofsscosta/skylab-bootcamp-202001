import registerUser from './register-user'
import retrieveUser from './retrieve-user'
import authenticate from './authenticate'

describe('register-user', () => {

    let name, surname, email, password

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        email = Math.random() + '@mail.com'
        password = 'password-' + Math.random()
    })

    // afterEach(() => {

    // })

    it('should succed on creating a new user if the email is not repeated and all fields are correct', () => {
        return registerUser(name, surname, email, password)
            .then(response  => {
                expect(response).toBeUndefined()
            })
            .then(() => authenticate(email, password))
            .then(token => retrieveUser(token))
            .then(user => {
                expect(user.name).toBe(name)
                expect(user.surname).toBe(surname)
                expect(user.email).toBe(email)
                expect(user.password).toBe(password)
            })

    })


})