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
    
    describe('On existing user', () => {
        beforeEach(done => {
            call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, surname, username, password })
            }, response => {
            if(response instanceof Error) return done(response)

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
})