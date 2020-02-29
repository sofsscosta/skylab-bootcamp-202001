const { authenticateUser, registerUser, retrieveUser } = require('.')
const chai = require('chai')
const path = require('path')
const expect = chai.expect
const { users } = require('../data')
const fs = require('fs').promises

describe('registerUser', () => {
    let name, surname, email, password, id

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        email = Math.random() + '@mail.com'
        password = 'password-' + Math.random()
    })

    it('should succeed on new user', () =>
        registerUser(name, surname, email, password)
            .then(response => {
                expect(response).to.be.an('undefined')
            })
            .then(() => authenticateUser(email, password))
            .then(_id => id = _id)
            .then(() => retrieveUser(id))
            .then(user => {
                const index = users.findIndex(user => Object.values(user)[3] === email)

                expect(users[index]).to.include(user)
            })

    )

    it('should fail on already existing user', () => {
        return registerUser(name, surname, email, password)
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.eql(Error(`user with email "${email}" already exists`))
            })
    })

    afterEach(() => {
        retrieveUser(id)
            .then(user => {
                const index = users.findIndex(user => Object.values(user)[3] === email)
                users.splice(index, 1)
                return fs.writeFile(path.join(__dirname, '../data/users.json'), JSON.stringify(users, null, 4))
            })
    })
})