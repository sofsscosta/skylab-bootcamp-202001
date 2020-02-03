describe('authenticate', () => {
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
            users.push(user)
        )

        it('should succeed on correct credentials', () =>
            expect(() =>
                authenticate(user.username, user.password)
            ).not.toThrow()
        )

        it('should fail on incorrect credentials', () => {
            expect(() =>
                authenticate(user.username, user.password + '-wrong')
            ).toThrowError(Error, 'Wrong credentials')

            expect(() =>
                authenticate(user.username + '-wrong', user.password)
            ).toThrowError(Error, 'Wrong credentials')
        })
    })

    it('should fail when user does not exist', () =>
        expect(() => {
            authenticate(user.username, user.password)
        }).toThrowError(Error, 'Wrong credentials')
    )

    afterEach(() =>
        users.length = 0
    )
})