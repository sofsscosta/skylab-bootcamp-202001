describe ('retrieveUser', () =>{ 
    let name, surname, username, password, token

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
    })
    describe('when token is provided', ()=> { 
        beforeEach(done =>
            call(`https://skylabcoders.herokuapp.com/api/v2/users`, { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, surname, username, password })

            }, response => {
                
                if (response instanceof Error) return done(response)

                call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username, password })

                }, response => {
                if (response instanceof Error) return done(response)
             
                const { error, token:_token } = JSON.parse(response.content)

                if (error) return done (new Error (error))

                token = _token 
                done()
                })
            
           })
          
    )
    it('should succed on valid token', done=>{
            retrieveUser(token, user => {
                
                expect(user).toBeInstanceOf(Object)
                expect(user.name).toBeA('string')
                expect(user.surname).toBeA('string')
                expect(user.username).toBeA('string')
            })
        }) 
    })
})










