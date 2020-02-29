const { authenticateUser, registerUser, retrieveUser } = require('.')
const chai = require('chai')
const path = require('path')
const expect = chai.expect
const { random } = Math
const { users } = require('../data')
const fs = require('fs').promises
const { env: { JWT_SECRET } } = process
const jwt = require('jsonwebtoken')

describe('createEvent', () => {

    beforeEach(() => {
        let title, publisher, date, location

        title = 
    })

})