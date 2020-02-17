describe("authenticate", function() {
  
  var user;

  beforeEach(function() {
    users.length = 0;

    user = {
      name: 'name-' + Math.random(),
      surnmae: 'surname-' + Math.random(),
      username: 'username-' + Math.random(),
      password: 'password' + Math.random()
    }
  })

  describe('when user already exists', function() {

    beforeEach(function() {users.push(user)})

    it("should succeed in correct credentials", function() {
      expect(function() {
        authenticate(user.username, user.password)
      }).not.toThrow();
    })

    it("should fail on incorrect credentials", function() {
      expect(function() {
        authenticate(user.username + '-wrong', user.password)
      }).toThrowError(Error, 'Wrong Credentials!');

      expect(function() {
        authenticate(user.username, user.password + '-wrong')
      }).toThrowError(Error, 'Wrong Credentials!')
    })

    afterEach(function() {users.length = 0})
  })

  it("should fail on none string as first or second parameter", function() {
    expect(function() {
      authenticate(undefined, "")
    }).toThrowError(TypeError, "undefined is not a string")

    expect(function() {
      authenticate([], "")
    }).toThrowError(TypeError, "Array is not a string")

    expect(function() {
      authenticate({}, "")
    }).toThrowError(TypeError, "[object Object] is not a string")

    expect(function() {
      authenticate(true, "")
    }).toThrowError(TypeError, "true is not a string")

    expect(function() {
      authenticate(5, "")
    }).toThrowError(TypeError, "5 is not a string")
  })


})