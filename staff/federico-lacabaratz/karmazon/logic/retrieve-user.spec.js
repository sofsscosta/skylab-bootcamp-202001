fdescribe('retrieveUser', () => {
    let name, surname, username, password, token

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
    })

    describe('when user already exists', () => {
        beforeEach(done =>
            call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, surname, username, password })
            }, response => {
                if (response instanceof Error) return done(response)

                if (response.content) {
                    const { error } = JSON.parse(response.content)

                    if (error) return done(new Error(error))
                }

                call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                }, response => {
                    if (response instanceof Error) return done(response)

                    const { error, token: _token } = JSON.parse(response.content)

                    if (error) return done(new Error(error))

                    token = _token

                    done()
                })

            })
        )

        it('should succeed on correct token', done =>
            retrieveUser(token, user => {
                expect(user).not.toBeInstanceOf(Error)

                expect(user.name).toBe(name)
                expect(user.surname).toBe(surname)
                expect(user.username).toBe(username)
                expect(user.password).toBeUndefined()

                done()
            })
        )

        it('should fail on invalid token', done => {            
            retrieveUser(`${token}-wrong`, error => {
                expect(error).toBeInstanceOf(Error)
                expect(error.message).toBe('invalid token')
    
                done()
            })
        })

        afterEach(done => {
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

    it('should fail on non-string token', () => {
        token = 1
        expect(() =>
            retrieveUser(token, () => { })
        ).toThrowError(TypeError, `token ${token} is not a string`)

        token = true
        expect(() =>
            retrieveUser(token, () => { })
        ).toThrowError(TypeError, `token ${token} is not a string`)

        token = undefined
        expect(() =>
            retrieveUser(token, () => { })
        ).toThrowError(TypeError, `token ${token} is not a string`)
    })

    it('should fail on invalid token format', () => {
        token = 'abc'

        expect(() =>
            retrieveUser(token, () => {})
        ).toThrowError(Error, 'invalid token')
    })

    it('should fail on non-function callback', () => {
        token = '...'

        callback = 1
        expect(() =>
            retrieveUser(token, callback)
        ).toThrowError(TypeError, `callback ${callback} is not a function`)

        callback = true
        expect(() =>
            retrieveUser(token, callback)
        ).toThrowError(TypeError, `callback ${callback} is not a function`)

        callback = undefined
        expect(() =>
            retrieveUser(token, callback)
        ).toThrowError(TypeError, `callback ${callback} is not a function`)
    })
})