'use strict'

describe('register', function (){
    beforeEach(function () {
        users.length = 0;
    });

    it('should add one user with four properties', function() {
        register('pepito', 'pep', 'pepi', '123');
        expect(users.length).toBe(1);
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
        }).toThrowError(TypeError, 'name  is not a string')

        expect(function() {
            register(function() {})
        }).toThrowError(TypeError, 'name function() {} is not a string')
    })

    it('should fail on non string values as surname parameters', function(){

        expect(function() {
            register('pepito', false)
        }).toThrowError(TypeError, 'surname false is not a string')

        expect(function() {
            register('pepito',5)
        }).toThrowError(TypeError, 'surname 5 is not a string')

        expect(function() {
            register('pepito',{})
        }).toThrowError(TypeError, 'surname [object Object] is not a string')

        expect(function() {
            register('pepito',[])
        }).toThrowError(TypeError, 'surname  is not a string')

        expect(function() {
            register('pepito',function() {})
        }).toThrowError(TypeError, 'surname function() {} is not a string')
    })

    it('should fail on non string values as username parameters', function(){

        expect(function() {
            register('pepito','pepito',false)
        }).toThrowError(TypeError, 'username false is not a string')

        expect(function() {
            register('pepito','pepito',5)
        }).toThrowError(TypeError, 'username 5 is not a string')

        expect(function() {
            register('pepito','pepito',{})
        }).toThrowError(TypeError, 'username [object Object] is not a string')

        expect(function() {
            register('pepito','pepito',[])
        }).toThrowError(TypeError, 'username  is not a string')

        expect(function() {
            register('pepito','pepito',function() {})
        }).toThrowError(TypeError, 'username function() {} is not a string')
    })

    it('should fail on non string values as password parameters', function(){

        expect(function() {
            register('pepito','pepito','pepito',false)
        }).toThrowError(TypeError, 'password false is not a string')

        expect(function() {
            register('pepito','pepito','pepito',5)
        }).toThrowError(TypeError, 'password 5 is not a string')

        expect(function() {
            register('pepito','pepito','pepito',{})
        }).toThrowError(TypeError, 'password [object Object] is not a string')

        expect(function() {
            register('pepito','pepito','pepito',[])
        }).toThrowError(TypeError, 'password  is not a string')

        expect(function() {
            register('pepito','pepito','pepito',function() {})
        }).toThrowError(TypeError, 'password function() {} is not a string')
    })
    
    afterEach(function() {
        users.length = 0;
    })

})
