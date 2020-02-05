describe('registerUser', () => {
    let name, surname, username, password

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
    })

    it('should succeed on new user', done => {
        debugger
        register(name, surname, username, password, error => {
            expect(error).toBeUndefined()

            done()
        })
    })
})