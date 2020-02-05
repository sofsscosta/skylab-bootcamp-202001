'use strict'

describe('register', function () {

    var user;

    beforeEach(function () {
        users.length = 0;

        user = {
            name: 'name-' + Math.random(),
            surname: 'surname-' + Math.random(),
            username: 'username-' + Math.random(),
            password: 'password-' + Math.random()
        };
    });

    it('should add a new user to array users if the username doesn\'t already exist', function() {
        
        register(user.name, user.surname, user.username, user.password)
        expect(users).toContain(user);
    })

    it('should display an error in case the username already exists', function() {
       
        register(user.name, user.surname, user.username, user.password)
        expect(function() {
            register(user.name, user.surname, user.username, user.password)
        }).toThrowError(Error, 'User ' + user.username + ' already exists')
    })

    it('should display an error message thrown by a synchronous error', function() {
        expect(function() {
            register(' ')
        }).toThrowError(Error, 'name is empty')

        expect(function() {
            register(true)
        }).toThrowError(Error, 'name true is not a string')

        expect(function() {
            register(3)
        }).toThrowError(Error, 'name 3 is not a string')

        expect(function() {
            register(function(){})
        }).toThrowError(Error, 'name function(){} is not a string')
    })

    afterEach( function() {
        users.length = 0;
    })

})