describe('unregisterUser()', () => {
    it('should delete a user from the API', (done) => {
        const userForRegister = { name: '1234', surname: '56678', username: '9876', password: '54321' }
        const userForAuthenticate = { username: '9876', password: '54321' }
        registerUser(userForRegister, () => {
            authenticateUser(userForAuthenticate, (response) => {
                const _JSON = response.content
                const object = JSON.parse(_JSON)
                const token = object.token

                unregisterUser(userForAuthenticate.password, token, (response) => {
                    expect(response.status).toBe(204)

                    done()
                })
            })
        })
    })
}) 