describe('authenticateUser', () => {
    let user

    beforeEach(() => {
        users.length = 0

        user = {
            name: 'name-' + Math.random(),
            surname: 'surname-' + Math.random(),
            username: 'username-' + Math.random(),
            password: 'password-' + Math.random()
        }
    })

    describe('when user already exists', () => {
        beforeEach(() =>
            call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: user.name, surname: user.surname, username: user.username, password: user.password })
            }, response => {
                const _response = response
            })
        )

        it('should succeed on correct credentials', () =>
            expect(() =>
                authenticateUser(user.username, user.password)
            ).not.toThrow()
        )

        it('should fail on incorrect credentials', () => {
            authenticateUser(user.username, user.password + '-wrong', token => {

                expect(token.status).toBe(401)
            })
            authenticateUser(user.username + '-wrong', user.password, token => {

                expect(token.status).toBe(404)
            })
        })
    })

    it('should fail when user does not exist', () =>
        authenticateUser(user.username, user.password, token => {

            expect(token.status).toBe(404)
        })
    )

})