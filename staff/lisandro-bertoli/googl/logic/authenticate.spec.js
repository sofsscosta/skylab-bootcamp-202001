'use strict';

describe('authenticate', function () {
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

    describe('when user already exists', function () {
        beforeEach(function () {
            users.push(user);
        });

        it('should succeed on correct credentials', function () {
            expect(function () {
                authenticate(user.username, user.password);
            }).not.toThrow();
        });

        it('should fail on incorrect credentials', function () {
            expect(function () {
                authenticate(user.username, user.password + '-wrong');
            }).toThrowError(Error, 'Wrong credentials');

            expect(function () {
                authenticate(user.username + '-wrong', user.password);
            }).toThrowError(Error, 'Wrong credentials');
        });
    });

    it('should fail when user does not exist', function () {
        expect(function () {
            authenticate(user.username, user.password);
        }).toThrowError(Error, 'Wrong credentials');
    });

    it('should fail on non-string parameters', function () {
        expect(function () {
            authenticate(undefined, user.password);
        }).toThrowError(TypeError, 'username undefined is not a string');

        expect(function () {
            authenticate(user.username, undefined);
        }).toThrowError(TypeError, 'password undefined is not a string');

    });

    afterEach(function () {
        users.length = 0;
    });
});