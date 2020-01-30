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
            }).toThrowError(Error, 'Wrong credentials, you cannot get in! ');

            expect(function () {
                authenticate(user.username + '-wrong', user.password);
            }).toThrowError(Error, 'Wrong credentials, you cannot get in! ');
        });
    });

    it('should fail when user does not exist', function () {
        expect(function () {
            authenticate(user.username, user.password);
        }).toThrowError(Error, 'Wrong credentials, you cannot get in! ');
    });

    afterEach(function () {
        users.length = 0;
    });
});