describe('updateUser', () => {
    let name, surname, username, password, token;

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()

    });

    describe('when user exists', () => {

        beforeEach(done =>
            call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, surname, username, password })

            }, (error, response) => {

                if (error) return done(error)

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

        it('should succeed on valid token', done => {
            name = name + 'updated'
            surname = surname + 'updated'
            username = username + 'updated'
            oldPassword = password
            password = password + 'updated'

            updateUser(token, { name, surname, username, password, oldPassword }, error => {
                expect(error).toBeUndefined()

                call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${token}` }

                }, (error, response) => {
                    if (error) return done(error)

                    const user = JSON.parse(response.content)
                    const { error: _error } = user

                    if (_error) return done(_error)

                    expect(user.name).toBe(name)
                    expect(user.surname).toBe(surname)
                    expect(user.username).toBe(username)
                    expect(user.password).toBeUndefined()

                    done()
                })

            })


        })
        it('should fail on invalid token', done => {
            token = token + 'wrong'
            updateUser(token, {}, error => {
                expect(error).toBeInstanceOf(Error)
                expect(error.message).toBe('invalid token')

                done()
            })
        })
    })
})