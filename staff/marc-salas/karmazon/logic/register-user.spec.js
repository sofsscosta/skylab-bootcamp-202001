describe('registerUser', () => {
    let name, surname, username, password

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
    })

    it('should succeed on new user', done => {
        register(name, surname, username, password, error => {
            expect(error).toBeUndefined()

            done()
        })
    })
    describe('when user already exist', () => {
        beforeEach(done => {
            call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, surname, username, password })
            }, response => {
                if (response instanceof Error) return callback(response)
                done()
            })
        })
        it('should fail in already existing user', done =>{
            register(name, surname, username, password, error =>{
                expect(error).toBeDefined()
                expect(error.message).toBe(`user with username "${username}" already exists`)
                done()
            })
        })


    })
})