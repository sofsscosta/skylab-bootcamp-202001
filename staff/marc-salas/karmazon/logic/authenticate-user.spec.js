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

        it('should succeed on correct credentials', done =>{
            expect(() => authenticateUser(user.username, user.password, function(){})).not.toThrow() 
            done()
        })
            
        it('should fail on incorrect credentials', done => {
            authenticateUser(user.username, user.password + '-wrong', error => {
                expect(error).toBeDefined()
                expect(error.message).toBe("username and/or password wrong")
                done()
            })
            authenticateUser(user.username + '-wrong', user.password, error => {
                expect(error).toBeDefined()
                expect(error.message).toBe("username and/or password wrong")
                done()
            })
        })
    })

    // it('should fail when user does not exist', () =>
    //     authenticateUser(user.username, user.password, token => {

    //         expect(token.status).toBe(404)
    //     })
    // )

})