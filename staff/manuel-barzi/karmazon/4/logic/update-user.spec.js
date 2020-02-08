describe('updateUser', () => {
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
            }, (error, response) => {
                if (error) return done(error)

                if (response.content) {
                    const { error } = JSON.parse(response.content)

                    if (error) return done(new Error(error))
                }

                call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                }, (error, response) => {
                    if (error) return done(error)

                    const { error: _error, token: _token } = JSON.parse(response.content)

                    if (_error) return done(new Error(_error))

                    token = _token

                    done()
                })

            })
        )

        it('should succeed on correct token', done => {
            name += '-update'
            surname += '-update'
            username += '-update'
            oldPassword = password
            password += '-update'

            updateUser(token, { name, surname, username, oldPassword, password }, (error, response) => {
                expect(error).toBeUndefined()
                expect(response).toBeUndefined()

                call(`https://skylabcoders.herokuapp.com/api/v2/users/`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }, (error, response) => {
                    if (error) return callback(error)

                    // retrieve user to check public info has actually been updated

                    const user = JSON.parse(response.content), { error: _error } = user

                    if (_error) return callback(new Error(_error))

                    expect(user.name).toBe(name)
                    expect(user.surname).toBe(surname)
                    expect(user.username).toBe(username)
                    expect(user.password).toBeUndefined()

                    // authenticate user to check password has actually been updated

                    call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password })
                    }, (error, response) => {
                        if (error) return callback(error)

                        const { error: _error, token } = JSON.parse(response.content)

                        if (_error) return done(new Error(_error))

                        expect(token).toBeA('string')

                        done()
                    })

                })
            })
        })

        it('should fail on invalid token', done => {
            updateUser(`${token}-wrong`, {}, (error, response) => {
                expect(error).toBeInstanceOf(Error)
                expect(error.message).toBe('invalid token')

                expect(response).toBeUndefined()

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
            }, (error, response) => {
                if (error) return done(error)

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
            updateUser(token, {}, () => { })
        ).toThrowError(TypeError, `token ${token} is not a string`)

        token = true
        expect(() =>
            updateUser(token, {}, () => { })
        ).toThrowError(TypeError, `token ${token} is not a string`)

        token = undefined
        expect(() =>
            updateUser(token, {}, () => { })
        ).toThrowError(TypeError, `token ${token} is not a string`)
    })

    it('should fail on invalid token format', () => {
        token = 'abc'

        expect(() =>
            updateUser(token, {}, () => { })
        ).toThrowError(Error, 'invalid token')
    })

    it('should fail on non-function callback', () => {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTNiZDhmZDE3YjgwOTFiYWFjMTIxMzgiLCJpYXQiOjE1ODA5ODA3NjEsImV4cCI6MTU4MDk4NDM2MX0.t8g49qXznSCYiK040NvOWHPXWqnj9riJ_6MD2vwIv3M'

        callback = 1
        expect(() =>
            updateUser(token, {}, callback)
        ).toThrowError(TypeError, `callback ${callback} is not a function`)

        callback = true
        expect(() =>
            updateUser(token, {}, callback)
        ).toThrowError(TypeError, `callback ${callback} is not a function`)

        callback = undefined
        expect(() =>
            updateUser(token, {}, callback)
        ).toThrowError(TypeError, `callback ${callback} is not a function`)
    })

    it('should fail on incorrect data property types or content', () => {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTNiZDhmZDE3YjgwOTFiYWFjMTIxMzgiLCJpYXQiOjE1ODA5ODA3NjEsImV4cCI6MTU4MDk4NDM2MX0.t8g49qXznSCYiK040NvOWHPXWqnj9riJ_6MD2vwIv3M'

        let data = { name: 1 }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(TypeError, `name ${data.name} is not a string`)

        data = { name: '' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `name is empty or blank`)

        data = { name: '\t\n\r' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `name is empty or blank`)

        data = { surname: 1 }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(TypeError, `surname ${data.surname} is not a string`)

        data = { surname: '' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `surname is empty or blank`)

        data = { surname: '\t\n\r' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `surname is empty or blank`)

        data = { username: 1 }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(TypeError, `username ${data.username} is not a string`)

        data = { username: '' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `username is empty or blank`)

        data = { username: '\t\n\r' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `username is empty or blank`)

        data = { password: 1 }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(TypeError, `password ${data.password} is not a string`)

        data = { password: '' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `password is empty or blank`)

        data = { password: '\t\n\r' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `password is empty or blank`)

        data = { oldPassword: 1 }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(TypeError, `oldPassword ${data.oldPassword} is not a string`)

        data = { oldPassword: '' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `oldPassword is empty or blank`)

        data = { oldPassword: '\t\n\r' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `oldPassword is empty or blank`)
    })

    it('should fail on unsatisfying password and oldPassword pair', () => {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTNiZDhmZDE3YjgwOTFiYWFjMTIxMzgiLCJpYXQiOjE1ODA5ODA3NjEsImV4cCI6MTU4MDk4NDM2MX0.t8g49qXznSCYiK040NvOWHPXWqnj9riJ_6MD2vwIv3M'

        data = { password: '123' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `oldPassword is not defined`)

        data = { oldPassword: '123' }
        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `password is not defined`)
    })

    it('should fail on non-familiar property', () => {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTNiZDhmZDE3YjgwOTFiYWFjMTIxMzgiLCJpYXQiOjE1ODA5ODA3NjEsImV4cCI6MTU4MDk4NDM2MX0.t8g49qXznSCYiK040NvOWHPXWqnj9riJ_6MD2vwIv3M'

        const property = 'hello'

        data = { [property]: 'world' }

        expect(() =>
            updateUser(token, data, () => { })
        ).toThrowError(Error, `property ${property} is not allowed`)
    })
})