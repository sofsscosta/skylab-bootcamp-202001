describe('authenticateUser', function () {
    let user

    beforeEach(() => {
        user = {
            name: 'done' + Math.random(),
            surname: 'done' + Math.random(),
            username: 'done' + Math.random(),
            password: 'done' + Math.random()
        }
    })

    describe('when user already exists', function() {
        beforeEach(function (done) {
            registerUser(user, () => {})
            done()
        })

        it('should succeed on correct credentials', function(done) {
            authenticateUser(user.username, user.password, response => {
                expect(typeof response).toBe("object")
                done()
            })
        })

        
    })
})
    

    // describe('when user already exists', function () {
    //     beforeEach(function () {
    //         // users.push(user)
    //         registerUser(user, response => {})
    //     })

    //     it('should succeed on correct credentials', function () {
    //         expect(function () {
    //             authenticateUser(user.username, user.password)
    //         }).not.toThrow()
    //     })

    //     it('should fail on incorrect credentials', function () {
    //         expect(function () {
    //             authenticateUser(user.username, user.password + '-wrong')
    //         }).toThrowError(Error, 'Wrong credentials')

    //         expect(function () {
    //             authenticateUser(user.username + '-wrong', user.password)
    //         }).toThrowError(Error, 'Wrong credentials')
    //     })
    // })

    // it('should fail when user does not exist', function () {
    //     expect(function () {
    //         authenticateUser(user.username, user.password)
    //     }).toThrowError(Error, 'Wrong credentials')
    // })

    // afterEach(function () {
    //     users.length = 0
    // })


/*
describe('authenticateUser', () => {
    let user

    beforeEach(() => {
        user = {
            name: 'name-' + Math.random(),
            surname: 'surname-' + Math.random(),
            username: 'username-' + Math.random(),
            password: 'password-' + Math.random()
        }
    })

    describe('when user already exists', () => {
        beforeEach(() =>
            users.push(user)
        )

        it('should succeed on correct credentials', () =>
            expect(() =>
                authenticateUser(user.username, user.password)
            ).not.toThrow()
        )

        it('should fail on incorrect credentials', () => {
            expect(() =>
                authenticateUser(user.username, user.password + '-wrong')
            ).toThrowError(Error, 'Wrong credentials')

            expect(() =>
                authenticateUser(user.username + '-wrong', user.password)
            ).toThrowError(Error, 'Wrong credentials')
        })
    })

    it('should fail when user does not exist', () =>
        expect(() => {
            authenticateUser(user.username, user.password)
        }).toThrowError(Error, 'Wrong credentials')
    )

    afterEach(() =>
        users.length = 0
    )
})

/*
'use strict'

describe('authenticateUser', function () {
    let user

    beforeEach(function () {

        user = {
            name: 'name-' + Math.random(),
            surname: 'surname-' + Math.random(),
            username: 'username-' + Math.random(),
            password: 'password-' + Math.random()
        }
    })

    describe('when user already exists', function () {
        beforeEach(function () {
            users.push(user)
        })

        it('should succeed on correct credentials', function () {
            expect(function () {
                authenticateUser(user.username, user.password)
            }).not.toThrow()
        })

        it('should fail on incorrect credentials', function () {
            expect(function () {
                authenticateUser(user.username, user.password + '-wrong')
            }).toThrowError(Error, 'Wrong credentials')

            expect(function () {
                authenticateUser(user.username + '-wrong', user.password)
            }).toThrowError(Error, 'Wrong credentials')
        })
    })

    it('should fail when user does not exist', function () {
        expect(function () {
            authenticateUser(user.username, user.password)
        }).toThrowError(Error, 'Wrong credentials')
    })

    afterEach(function () {
        users.length = 0
    })
})
*/