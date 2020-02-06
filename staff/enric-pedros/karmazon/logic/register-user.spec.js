describe('Register user testing', () => {
    let name, surname, username, password

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
    })
    it ('should succeed on a new register', done =>{
        registerUser(name, surname, username, password, error  =>{
            expect(error).toBeUndefined()
            
            expect(typeof name).toBe('string')
            expect(typeof surname).toBe('string')
            expect(typeof username).toBe('string')
            expect(typeof password).toBe('string')
            done()
        })
    } )
})


