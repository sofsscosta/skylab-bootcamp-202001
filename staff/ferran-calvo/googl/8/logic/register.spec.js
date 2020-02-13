'use strict';

​describe('register', function () {
​
    var user;
​
    beforeEach(function () {
        users.length = 0;
​
        user = {
            name: 'name-' + Math.random(),
            surname: 'surname-' + Math.random(),
            username: 'username-' + Math.random(),
            password: 'password-' + Math.random()
        };
    });
​
    it('should add a new user to array users if the username doesn\'t already exist', function() {
        
        register(user.name, user.surname, user.username, user.password)
​
        expect(users).toContain(user);
    })
​
    it('should display an error in case the username already exists', function() {
       
        register(user.name, user.surname, user.username, user.password)
​
        expect(function(user) {
            
            register(user.name, user.surname, user.username, user.password)
        }).toThrowError(Error, 'User ' + user.username + ' already exists')
    })
​
    afterEach( function() {
        users.length = 0;
    })
​
})