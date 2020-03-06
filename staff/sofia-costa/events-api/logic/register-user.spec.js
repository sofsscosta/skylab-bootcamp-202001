require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { models: { User } } = require('events-data')
const { expect } = require('chai')
const { random } = Math
const { NotAllowedError } = require('events-errors')
const { registerUser } = require('.')
const { mongoose } = require('events-data')
const bcrypt = require('bcryptjs')

describe('registerUser', () => {

    before(() => {
        mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    })

    let name, surname, email, password, id

    beforeEach(() => {
        name = 'name-' + random()
        surname = 'surname-' + random()
        email = random() + '@mail.com'
        password = 'password-' + random()
    })

    describe('', () => {

        it('should succeed on new user', () =>{
            
            return registerUser(name, surname, email, password)
                .then(response => {
                    expect(response).to.be.an('undefined')
                })
                .then(() => User.findOne({ email }))
                .then((user) => {
                    expect(user.name).to.equal(name)
                    expect(user.surname).to.equal(surname)
                    expect(user.email).to.equal(email)

                    return bcrypt.compare(password, user.password)
                })
                .then(validPassword => expect(validPassword).to.be.true)
        })
    
        it('should fail on already existing user', () => {
            expect(() => 
                registerUser(name, surname, email, password)
                .then(error => {
                    expect(error).to.eql(NotAllowedError, `user with email "${email}" already exists`)
                })
            )
        })
    })


    afterEach(() => {
        User.deleteOne({ _id: id })
    })

    after(() => {
        mongoose.disconnect()
    })
})