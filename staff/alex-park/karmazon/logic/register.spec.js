'use strict';

describe('register', function (){
    beforeEach(function () {
        users.length = 0;
    });

    it('should add one user with four properties', function() {
        register('pepito', 'pep', 'pepi', '123')
        expect(users.length).toBe(1)
    });

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
    });

    it('should fail on non string values as surname parameters', function(){
        expect(function() {
            register('oso', false)
        }).toThrowError(TypeError, 'surname false is not a string')
        expect(function() {
            register('s',5)
        }).toThrowError(TypeError, 'surname 5 is not a string')
        expect(function() {
            register('oso',{})
        }).toThrowError(TypeError, 'surname [object Object] is not a string')
        expect(function() {
            register('oso',[])
        }).toThrowError(TypeError, 'surname  is not a string')
        expect(function() {
            register('oso',function() {})
        }).toThrowError(TypeError, 'surname function() {} is not a string')
    });

    it('should fail on non string values as username parameters', function(){
        expect(function() {
            register('oso','s',false)
        }).toThrowError(TypeError, 'username false is not a string')
        expect(function() {
            register('oso','oso',5)
        }).toThrowError(TypeError, 'username 5 is not a string')
        expect(function() {
            register('oso','oso',{})
        }).toThrowError(TypeError, 'username [object Object] is not a string')
        expect(function() {
            register('oso','oso',[])
        }).toThrowError(TypeError, 'username  is not a string')
        expect(function() {
            register('oso','oso',function() {})
        }).toThrowError(TypeError, 'username function() {} is not a string')
    });

    it('should fail on non string values as password parameters', function(){
        expect(function() {
            register('oso','oso','oso',false)
        }).toThrowError(TypeError, 'password false is not a string')
        expect(function() {
            register('oso','oso','oso',5)
        }).toThrowError(TypeError, 'password 5 is not a string')
        expect(function() {
            register('oso','oso','oso',{})
        }).toThrowError(TypeError, 'password [object Object] is not a string')
        expect(function() {
            register('oso','oso','oso',[])
        }).toThrowError(TypeError, 'password  is not a string')
        expect(function() {
            register('oso','oso','oso',function() {})
        }).toThrowError(TypeError, 'password function() {} is not a string')
    });
    // it('should fail on an empty name parameter', function () {
    //     expect(function() {
    //         register()
    //     }).toThrowError(Error, 'name is empty');
    // })

    afterEach(function() {
        users.length = 0;
    })
})