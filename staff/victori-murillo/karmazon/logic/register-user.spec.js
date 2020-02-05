describe("registerUser", () => {
  let user

  beforeEach(done => {
      user = {
        name: 'done' + Math.random(),
        surname: 'done' + Math.random(),
        username: 'done' + Math.random(),
        password: 'done' + Math.random()
    }

    registerUser(user, error => {
        expect(error).toBeUndefined()
        done()
    })
  })

  // it('should succeed on new user', done => {
  //     registerUser(user, error => {
  //       expect(error).toBeUndefined()
  //       done()
  //   })
  // })

  it("should fail when an user already exist", done => {

    call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }, response => {
      console.log(response)
      var error = JSON.parse(response.content).error
      expect(error).toBe(`user with username "${user.username}" already exists`)
      expect(response.status).toBe(409)

      done()
    })
    
    // expect(() => {
    //   registerUser(user, error => {

    //   }).t
    // })

    // registerUser(user, error => {
    //   expect(error).toBeDefined()
    //   expect(error.message).toBe(`user with username ${user.username} already exists`)

    //   done()
    // })

  })



})