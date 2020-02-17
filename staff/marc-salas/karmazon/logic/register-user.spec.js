describe('registerUser', () => {
    let name, surname, username, password, error

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
    })

    it('should succeed on new user', done => {
        registerUser(name, surname, username, password, (error, response) => {
            expect(error).toBeUndefined()

            expect(response).toBeUndefined()

            done()
        })
    })

    describe('On existing user', () => {
        beforeEach(done => {
            call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, surname, username, password })
            }, (error, response) => {
                if (error) return callback(error)

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

    it('should fail on non-string name', () => {
        name = 1
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `name ${name} is not a string`)

        name = true
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `name ${name} is not a string`)

        name = undefined
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `name ${name} is not a string`)

        name = null
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `name ${name} is not a string`)
    })

    it('should fail on non-string surname', () => {
        surname = 1
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `surname ${surname} is not a string`)

        surname = true
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `surname ${surname} is not a string`)

        surname = undefined
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `surname ${surname} is not a string`)

        surname = null
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `surname ${surname} is not a string`)
    })

    it('should fail on non-string username', () => {
        username = 1
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `username ${username} is not a string`)

        username = true
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `username ${username} is not a string`)

        username = undefined
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `username ${username} is not a string`)

        username = null
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `username ${username} is not a string`)
    })

    it('should fail on non-string password', () => {
        password = 1
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `password ${password} is not a string`)

        password = true
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `password ${password} is not a string`)

        password = undefined
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `password ${password} is not a string`)

        password = null
        expect(() =>
            registerUser(name, surname, username, password, error => { })
        ).toThrowError(TypeError, `password ${password} is not a string`)
    })

    it('should fail on non-function callback', () => {
        callback = 1
        expect(() =>
            registerUser(name, surname, username, password, callback)
        ).toThrowError(TypeError, `${callback} is not a function`)

        callback = true
        expect(() =>
            registerUser(name, surname, username, password, callback)
        ).toThrowError(TypeError, `${callback} is not a function`)

        callback = undefined
        expect(() =>
            registerUser(name, surname, username, password, callback)
        ).toThrowError(TypeError, `${callback} is not a function`)

        callback = null
        expect(() =>
            registerUser(name, surname, username, password, callback)
        ).toThrowError(TypeError, `${callback} is not a function`)
    })
})