describe('register', function (){
    beforeEach(function () {
        users.length = 0;
    });

    it('should add one user with four properties', function() {
        register('pepito', 'pep', 'pepi', '123')
        expect(users.length).toBe(1)
    })

    it('should fail on non string values as name parameters', function(){

        expect(function() {
            register(false)
        }).toThrowError(TypeError, 'name false is not a string')

        expect(function() {
            register(5)
        }).toThrowError(TypeError, 'name 5 is not a string')

        expect(function() {
            register({})
        }).toThrowError(TypeError, 'name [object Object] is not a string')

        expect(function() {
            register([])
        }).toThrowError(TypeError, 'name Array is not a string')

        expect(function() {
            register(function() {})
        }).toThrowError(TypeError, 'name function() {} is not a string')
    })
    
    afterEach(function() {
        users.length = 0;
    })

})