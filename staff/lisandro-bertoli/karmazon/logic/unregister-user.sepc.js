describe('unregisterUser', () => {
    let name, surname, username, password;

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()



    });
    describe('when user exists', () => {
        let token
        beforeEach(done => {

            registerUser(name, surname, username, password, () => { })
            authenticateUser(username, password, response => {
                token = JSON.stringify(response.content)
                done()
            })
        })

        it('should remove user', done => {
            unregisterUser(username, password, token, response => {
                expect(error).toBeUndefined()
                done()
            })
        })

    });
});
