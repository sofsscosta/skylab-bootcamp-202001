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

    false && describe('when user already exists', () => {
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

    false && it('should fail when user does not exist', () =>
        expect(() => {
            authenticateUser(user.username, user.password, ()=>{

            })
        }).toThrowError(Error, 'Wrong credentials')
    )

    it('should fail on non-string username', () => {
        expect(() => authenticateUser(undefined, 'test', () => { })).toThrowError(TypeError, 'undefined is not a string')
        expect(() => authenticateUser(1, 'test', () => { })).toThrowError(TypeError, '1 is not a string')
        expect(() => authenticateUser(true, 'test', () => { })).toThrowError(TypeError, 'true is not a string')
        expect(() => authenticateUser('', 'test', () => { })).toThrowError(Error, 'username is empty')
        expect(() => authenticateUser({}, 'test', () => { })).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail on non-string password', () => {
        expect(() => authenticateUser('test', undefined, () => { })).toThrowError(TypeError, 'undefined is not a string')
        expect(() => authenticateUser('test', 1, () => { })).toThrowError(TypeError, '1 is not a string')
        expect(() => authenticateUser('test', true, () => { })).toThrowError(TypeError, 'true is not a string')
        expect(() => authenticateUser('test', '', () => { })).toThrowError(Error, 'password is empty')
        expect(() => authenticateUser('test', {}, () => { })).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail on non-function callback', () => {
        expect(() => authenticateUser('test', 'test', undefined)).toThrowError(TypeError, 'undefined is not a function')
        expect(() => authenticateUser('test', 'test', 1)).toThrowError(TypeError, '1 is not a function')
        expect(() => authenticateUser('test', 'test', true)).toThrowError(TypeError, 'true is not a function')
        expect(() => authenticateUser('test', 'test', {})).toThrowError(TypeError, '[object Object] is not a function')
    })

    afterEach(() =>
        users.length = 0
    )
})