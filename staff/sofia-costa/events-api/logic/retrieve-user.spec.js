// TODO
const { authenticateUser, registerUser, retrieveUser } = require('.')
const chai = require('chai')
const path = require('path')
const expect = chai.expect
const { users } = require('../data')
const fs = require('fs').promises
const { env: { JWT_SECRET } } = process
const jwt = require('jsonwebtoken')

describe('retrieveUser', () => {
    let name, surname, email, password, id

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        email = Math.random() + '@mail.com'
        password = 'password-' + Math.random()
    })

    describe('when user already exists', () => {

        beforeEach(() => {
            registerUser(name, surname, email, password)
                .then(() => console.log('registered'))
                .then(() => authenticateUser(email, password))
                .then(_id => {
                    id = _id
                    console.log(id)
                })
                .catch(error => {
                    expect(error).to.be.an('undefined')
                })
        })

        afterEach(() => {
            return retrieveUser(id)
                .then(() => {
                    const index = users.findIndex(user => Object.values(user)[3] === email)
                    users.splice(index, 1)
                    return fs.writeFile(path.join(__dirname, '../data/users.json'), JSON.stringify(users, null, 4))
                })
        })

        it('should succeed on correct id', () =>
            retrieveUser(id)
                .then(user => {

                    expect(user).to.not.be.an('undefined')

                    const VALID_KEYS = ['name', 'surname', 'email']
                    Object.keys(user).forEach(key => VALID_KEYS.includes(key))

                    expect(user.name).toBe(name)
                    expect(user.surname).toBe(surname)
                    expect(user.email).toBe(email)
                    expect(user.password).toBeUndefined()
                })
        )

        it('should fail on invalid id', () =>
        expect(() => {
            retrieveUser(`${id}--wrong`)
        }).to.throw(Error, 'invalid id')
        )

    })

    it('should fail on non-string token', () => {
        id = 1
        expect(() =>
            retrieveUser(id)
        ).to.throw(TypeError, `id ${id} is not a string`)

        id = true
        expect(() =>
            retrieveUser(id)
        ).to.throw(TypeError, `id ${id} is not a string`)

        id = undefined
        expect(() =>
            retrieveUser(id)
        ).to.throw(TypeError, `id ${id} is not a string`)
    })

    it('should fail on invalid id format', () => {

        expect(() =>
            retrieveUser(123)
        ).to.throw(Error, 'id 123 is not a string')
    })
})