'use strict';

describe('search util', function () {
    it('should fail if the url is not a boolean', function () {
        expect(function () {
            search(false, 1,1,1,1, function(){})
        }).toThrowError(TypeError, 'false is not a string')
    });

    it('should fail if the url is not defined', function () {
        expect(function () {
            search(undefined, 1,1,1,1, function(){})
        }).toThrowError(TypeError, 'undefined is not a string')
    });

    it('should fail if the url is a number', function () {
        expect(function () {
            search(-50, 1,1,1,1, function(){})
        }).toThrowError(TypeError, '-50 is not a string')
    });

    it('should fail if the url is an object', function () {
        expect(function () {
            search({}, 1,1,1,1, function(){})
        }).toThrowError(TypeError, '[object Object] is not a string')
    });

    it('should fail if the last argument is not a function', function() {
        expect(function() {
            search('pepito', 1,1,1,1, false)
        }).toThrowError(TypeError, 'false is not a function');

        expect(function() {
            search('pepito', 1,1,1,1, -50)
        }).toThrowError(TypeError, '-50 is not a function');

        expect(function() {
            search('pepito', 1,1,1,1, undefined)
        }).toThrowError(TypeError, 'undefined is not a function');

        expect(function() {
            search('pepito', 1,1,1,1, {})
        }).toThrowError(TypeError, '[object Object] is not a function');
    })
    
});