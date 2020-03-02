require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { database, database: { ObjectId } } = require('../data')
const { expect } = require('chai')
const { random } = Math
const { NotAllowedError } = require('../errors')
const { registerUser } = require('.')

describe('registerUser', () => {

    before(() => {
        database.connect(TEST_MONGODB_URL)
            .then(() => {
                users = database.collection('users')
            })
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
                .then(() => users.findOne({ name, surname, email, password }))
                .then((user) => {
                    expect(user.name).to.equal(name)
                    expect(user.surname).to.equal(surname)
                    expect(user.email).to.equal(email)
                    expect(user.password).to.equal(password)
                })
        })
    
        it('should fail on already existing user', () => {
            expect(() => 
                registerUser(name, surname, email, password)
                .then(error => {
                    expect(error).to.eql(Error(`user with email "${email}" already exists`))
                })
            )
        })
    })


    afterEach(() => {
        users.deleteOne({ _id: ObjectId(id) })
    })

    after(() => {
        database.disconnect()
    })
})