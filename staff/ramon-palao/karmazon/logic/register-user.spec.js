"use strict";

describe("register", function(){
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

    it("should store user's credentials within an array", function(){
        expect(users).toBeDefined();
        expect(users.length).toBeGreaterThan(0);
    });
});