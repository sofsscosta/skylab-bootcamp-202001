const { authenticateUser, registerUser, retrieveUser } = require('.')
const chai = require('chai')
const expect = chai.expect
const { users } = require('../data')
const fs = require('fs').promises
const path = require('path')

describe('authenticateUser', () => {
    let name, surname, email, password, id

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        email = Math.random() + '@mail.com'
        password = 'password-' + Math.random()
    })

    describe('when user already exists', () => {
        
        it('should succeed on correct credentials', () =>
            authenticateUser(email, password)
                .then(_id => {
                    id = _id
                    expect(_id).to.be.string
                    expect(_id.length).to.be.at.least(0)
                })
        )

        it('should fail on incorrect password', () => {
            expect(() => {
                authenticateUser(email, `${password}-wrong`)
            }).to.throw(Error, 'wrong credentials')
        })

        beforeEach(() => {
            registerUser(name, surname, email, password)
                .then(() => console.log('registered'))
                .catch(error => {
                    expect(error).to.be.an('undefined')
                })
        })

        afterEach(() => {
            retrieveUser(id)
                .then(user => {
                    users.splice(users.indexOf(user), 1)
                    return fs.writeFile(path.join(__dirname, '../data/users.json'), JSON.stringify(users, null, 4))
                })
        })
    })

    it('should fail when user does not exist', () => {

        email = Math.random() + '@mail.com'
        expect(() => {
            authenticateUser(email, password)
        }).to.throw(Error, 'wrong credentials')
            // .then(() => { throw new Error('should not reach this point') })
            // .catch(error => {
            //     expect(error).to.be.instance.of(Error)
            //     //expect(error.message).to.have.string('wrong credentials')
            // })
    })

    it('should fail on non-string email', () => {
        email = 1
        expect(() =>
            authenticateUser(email, password)
        ).to.throw(TypeError, `email ${email} is not a string`)

        email = true
        expect(() =>
            authenticateUser(email, password)
        ).to.throw(TypeError, `email ${email} is not a string`)

        email = undefined
        expect(() =>
            authenticateUser(email, password)
        ).to.throw(TypeError, `email ${email} is not a string`)
    })

    it('should fail on non-string password', () => {
        email = Math.random() + '@mail.com'
        password = 1
        expect(() =>
            authenticateUser(email, password)
        ).to.throw(TypeError, `password ${password} is not a string`)

        password = true
        expect(() =>
            authenticateUser(email, password)
        ).to.throw(TypeError, `password ${password} is not a string`)

        password = undefined
        expect(() =>
            authenticateUser(email, password)
        ).to.throw(TypeError, `password ${password} is not a string`)
    })
})




// .then(() => {throw new Error('should not have reached this point')})
//                 .catch(error => {
//                     expect(error).to.be.instance.of(Error)
//                     expect(error.status).to.equal(409)
//                 })