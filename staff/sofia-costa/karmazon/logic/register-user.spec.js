// 'use strict'

// describe('register', function () {

//     var user;

//     beforeEach(function () {
//         users.length = 0;

//         user = {
//             name: 'name-' + Math.random(),
//             surname: 'surname-' + Math.random(),
//             username: 'username-' + Math.random(),
//             password: 'password-' + Math.random()
//         };
//     });

//     it('should add a new user to array users if the username doesn\'t already exist', function() {
        
//         register(user.name, user.surname, user.username, user.password)
//         expect(users).toContain(user);
//     })

//     it('should display an error in case the username already exists', function() {
       
//         register(user.name, user.surname, user.username, user.password)
//         expect(function() {
//             register(user.name, user.surname, user.username, user.password)
//         }).toThrowError(Error, 'User ' + user.username + ' already exists')
//     })

//     it('should display an error message thrown by a synchronous error', function() {
//         expect(function() {
//             register(' ')
//         }).toThrowError(Error, 'name is empty')

//         expect(function() {
//             register(true)
//         }).toThrowError(Error, 'name true is not a string')

//         expect(function() {
//             register(3)
//         }).toThrowError(Error, 'name 3 is not a string')

//         expect(function() {
//             register(function(){})
//         }).toThrowError(Error, 'name function(){} is not a string')
//     })

//     afterEach( function() {
//         users.length = 0;
//     })

// })





describe('registerUser', () => {
    let name, surname, username, password

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
    })

    it('should succeed on new user', done => {
        registerUser(name, surname, username, password, error => {
            expect(error).toBeUndefined()

            done()
        })
    })

    describe('when user already exists', () => {
        beforeEach(done => {
            call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, surname, username, password })
            }, response => {
                if (response instanceof Error) return done(response)

                done()
            })
        })

        it('should fail on already existing user', done => {
            registerUser(name, surname, username, password, error => {
                expect(error).toBeDefined()
                expect(error.message).toBe(`user with username "${username}" already exists`)

                done()
            })
        })
    })

    afterEach(done => {
        call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }, response => {
            if (response instanceof Error) return done(response)

            const { error, token } = JSON.parse(response.content)

            if (error) return done(new Error(error))

            call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ password })
            }, response => {
                if (response instanceof Error) return done(response)

                if (response.content) {
                    const { error } = JSON.parse(response.content)

                    if (error) return done(new Error(error))
                }

                done()
            })
        })
    })
})