"use strict";

describe("Authentication Test", function(){
    var user;
    beforeEach(function(){
        users.length = 0;

        user = {
            name: "name" + Math.random(),
            surname: "surname" + Math.random(),
            username: "username" + Math.random(),
            password: "password" + Math.random()
        }
    });
    describe("When user already exist", function(){
        beforeEach(function(){
            users.push(user);
        });

        it("should succed on correct credentials", function(){
            expect(function(){
                authentication(user.username, user.password)
            }).not.toThrow();
        })
        it("should fail on incorrect credentials", function(){
            expect(function(){
                authentication(user.username + "-wrong", user.password)
            }).toThrowError(Error, "wrong credentials");
            expect(function(){
                authentication(user.username, user.password + "-wrong")
            }).toThrowError(Error, "wrong credentials");
        })
        
    })
    
    it("Should fail on non exist user", function(){
        expect(function(){
            authentication(user.username, user.password)
        }).toThrowError(Error, "wrong credentials")
    })

    it("Should fail on non string arguments", function(){
        expect(function(){
            authentication(undefined, user.password)
        }).toThrowError(TypeError, "undefined is not a string");
        expect(function(){
            authentication(user.name, undefined)
        }).toThrowError(TypeError, "undefined is not a string");
    })

    afterEach(function(){
        users.length = 0;
    });

});
