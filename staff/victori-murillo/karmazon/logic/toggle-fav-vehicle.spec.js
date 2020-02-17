fdescribe('toggle-fav-vehicle', () => {
  let name, surname, username, password, token, id
  let Ids = ['FGD', 'ADF', 'DFG', 'TYU', 'AWR', 'QEW', 'VAM']

  beforeEach(done => {
    name = 'name-' + Math.random()
    surname = 'surname-' + Math.random()
    username = 'username-' + Math.random()
    password = 'password-' + Math.random()

    registerUser({name, surname, username, password}, error => {
      authenticateUser(username, password, (error, tokenGot) => {

        token = tokenGot
        done()
      })
    })
  })

  describe('when user already exists', () => {

    it('add fav to the user', done => {
      const index = Math.floor(Math.random() * Math.floor(Ids.length))
      let idRandom = Ids[index]

      toggleFavVehicle(token, idRandom, (error, query) => {
        retrieveUser(token, (error, user) => {
          expect(user.fav[0]).toBe(idRandom)
          expect(user.fav).toBeDefined()
          done()
        })
      })
    })

  })


  describe('when user already exists and has fav property', () => {

    const index = Math.floor(Math.random() * Math.floor(Ids.length))
    debugger
    let idRandom = Ids[index]
    
    beforeEach((done) => {
      toggleFavVehicle(token, idRandom, (error, query) => {
        done()
      })
    })

    it('remove fav to the user', done => {
      
      toggleFavVehicle(token, idRandom, (error, query) => {
        retrieveUser(token, (error, user) => {

          const {fav} = user

          expect(fav.length).toBe(0)
          done()

        })
      })
    })

  })

})
