"use strict"

describe("register", function(){
    var user;
    beforeEach(function (){
        users.length = 0;
         user = {
            name: [1,2,3,6],
            surname: 'surname-' + Math.random(),
            username: 'username-' + Math.random(),
            password: 'password-' + Math.random()
         } 
    })

    describe('when user already exists', function () {
        beforeEach(function () {
            users.push(user);
        });

        it("Should fail if name is an array", function(){
            expect(function(){  
                debugger;
            register(user.name, user.surname, user.username, user.password) });
        }).toThrowError(TypeError, "array" + user.name + ' is not a string')
    })
})
