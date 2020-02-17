'use strict';

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

    describe('when registering a username that already exists within our database', function () {

        it('should succeed on complete correct new data', function () {
            expect(function () { 
                register(user.name, user.surname, user.username, user.password);
            }).not.toThrow();
        });

        it('should fail on matching a new username with an already created username', function () {
            users.push(user)
            
            expect(function () { 
                register(user.name, user.surname, user.username, user.password);
            }).toThrowError(Error, 'User ' + user.username + ' already exists');
        });
        
        it('should fail when a user name is not a \'string\'', function () {
            expect(function () { 
                register(1, user.surname, user.username, user.password);
            }).toThrowError(TypeError, 'name ' + 1 + ' is not a string');
        });
        
        it('should fail when a user surname is not a \'string\'', function () {
            expect(function () { 
                register(user.name, 1, user.username, user.password);
            }).toThrowError(TypeError, 'surname ' + 1 + ' is not a string');
        });
        
        it('should fail when a user username is not a \'string\'', function () {
            expect(function () { 
                register(user.name, user.surname, 1, user.password);
            }).toThrowError(TypeError, 'username ' + 1 + ' is not a string');
        });
        
        it('should fail when a user password is not a \'string\'', function () {
            expect(function () { 
                register(user.name, user.surname, user.username, 1);
            }).toThrowError(TypeError, 'password ' + 1 + ' is not a string');
        });
    });
});