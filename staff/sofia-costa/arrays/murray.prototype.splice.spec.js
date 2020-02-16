describe('Murray.prototype.splice', function() {

    //Happy path <3

    it('should return an array which\'s length equals to the value in the second argument (if it is passed)', function() {
        var murray = new Murray (1, 2, 3, 4, 5, 6)
        var result = murray.splice(2, 2, 'olá')

        expect(murray).toBeInstanceOf(Murray)
        expect(result.length).toBe(2)
    })

    it('should modify the original array so that it\'s length equals to its length minus the number in the second parameter (if it is passed) and plus the number of arguments passed afterwards (if there\'s any)', function() {
        var murray = new Murray (1, 2, 3, 4, 5, 6) 
        murray.splice(2, 2, 'olá')

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(6 - 2 + 1)
    })

    it('should start extracting the spliced elements from the value of the first argument', function() {
        var murray = new Murray (1, 2, 3, 4, 5, 6)
        var result = function() {return murray.splice(2, 2, 'olá')}

        expect(murray).toBeInstanceOf(Murray)
        for (var i = 0; i<2+2; i++) {
            expect(murray[i+2]).toBe(result()[i])
        }
    })

    it('should remove the number of elements passed by the second parameter, starting from the end, in case the value given is negative', function() {
        var murray = new Murray (1, 2, 3, 4, 5, 6, 7)
        murray.splice(-3, 2, 'olá')

        expect(murray).toBeInstanceOf(Murray)
        for (var i = 0; i<4; i++) 
            expect(murray[i]).toBe(i + 1)
        expect(murray[4]).toBe('olá')
        expect(murray[5]).toBe(7)
    })

    it('should assume the first parameter as 0 in case murray.length + arguments[0] is less than 0', function() {
        var murray = new Murray (1, 2, 3, 4, 5, 6, 7)
        var result = murray.splice(-9, 2, 'olá')

        expect(murray).toBeInstanceOf(Murray)
        expect(murray[0]).toBe('olá')
        for (var i = 1; i<murray.length; i++) 
            expect(murray[i]).toBe(i + 2)   
        expect(result[0]).toBe(1)
        expect(result[1]).toBe(2)
    })

    it('should not remove any elements in case the second argument is negative and there is at least one more argument passed to insert in array', function() {
        var murray = new Murray (1, 2, 3, 4, 5, 6, 7)
        var result = murray.splice(2, -2, 'olá')

        expect(murray).toBeInstanceOf(Murray)
        for (var i = 0; i<2; i++) 
            expect(murray[i]).toBe(i + 1)   
        expect(murray[2]).toBe('olá')
        for (var i = 3; i<murray.length; i++) 
            expect(murray[i]).toBe(i)
    })

    it('should not remove any elements in case the second argument is negative and there is no more argument passed to insert in array', function() {
        var murray = new Murray (1, 2, 3, 4, 5, 6, 7)
        var result = murray.splice(2, -2)

        expect(murray).toBeInstanceOf(Murray)
        for (var i = 0; i<murray.length; i++) 
            expect(murray[i]).toBe(i + 1)
    })

    it('should assume the first parameter is 0 in case a number is not passed', function() {
        var murray = new Murray (1, 2, 3, 4, 5, 6, 7)
        var result = murray.splice(function(){})

        expect(murray).toBeInstanceOf(Murray)
        for (var i = 0; i<murray.length; i++) 
            expect(murray[i]).toBe(i + 1)

        var murray = new Murray (1, 2, 3, 4, 5, 6, 7)
        var result = murray.splice(function(){}, 1)

        expect(murray).toBeInstanceOf(Murray)
        for (var i = 0; i<murray.length; i++) 
            expect(murray[i]).toBe(i + 2)

        var murray = new Murray (1, 2, 3, 4, 5, 6, 7)
        var result = murray.splice([1, 2, 3])

        expect(murray).toBeInstanceOf(Murray)
        for (var i = 0; i<murray.length; i++) 
            expect(murray[i]).toBe(i + 1)

        var murray = new Murray (1, 2, 3, 4, 5, 6, 7)
        var result = murray.splice(true)

        expect(murray).toBeInstanceOf(Murray)
        for (var i = 0; i<murray.length; i++) 
            expect(murray[i]).toBe(i + 1)
    })

    it('should return all the arguments after the value passed in the first parameter if the second one is not specified', function() {
        var murray = new Murray (1, 2, 3, 4, 5, 6, 7)
        var result = murray.splice(3)

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(3)
        expect(result.length).toBe(4)
        for (var i = 0; i<murray.length; i++)
            expect(murray[i]).toBe(i+1)
        for (var i = 0; i<result.length; i++)
            expect(result[i]).toBe(i+4)
    })

    it('should return an empty murray with no length and keep the orignal array with the same length in case the original array has no length', function() {
        var murray = new Murray
        var result = murray.splice(3)

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(0)
        expect(result.length).toBe(0)

        var murray = new Murray
        var result = murray.splice(3, 2, 'olá', 'adeus')

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(2)
        expect(result.length).toBe(0)
        expect(murray[0]).toBe('olá')
        expect(murray[1]).toBe('adeus')


    })

    it('Should delete and return all the values from the start if the second argument is greater than the murray length', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        var result = murray.splice(1, 10)
        expect(murray.length).toBe(1)
        expect(result.length).toBe(4)
        for(var i = 0; i < murray.length; i++) {
            expect(murray[i]).toBe(i + 1)
        }
        for(var i = 0; i < result.length; i++) {
            expect(result[i]).toBe(i + 2)
        }
    })

    it('Should delete and return all the values from the start if the second argument is greater than the murray length', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        var result = murray.splice(1, 10)
        expect(murray.length).toBe(1)
        expect(result.length).toBe(4)
        for(var i = 0; i < murray.length; i++) {
            expect(murray[i]).toBe(i + 1)
        }
        for(var i = 0; i < result.length; i++) {
            expect(result[i]).toBe(i + 2)
        }
    })

    it('Should not fail if the first or the second parameters are not integer numbers rounding them by defect', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        var result = murray.splice(1.6, 2.1, 'x')
        expect(murray.length).toBe(4)
        expect(result.length).toBe(2)
        expect(murray[0]).toBe(1)
        expect(murray[1]).toBe('x')
        expect(murray[2]).toBe(4)
        expect(result[0]).toBe(2)
        expect(result[1]).toBe(3)
    })

    it('Should start and end be 0 if a non numeric value is passed as first, second or both parameters', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        var result = murray.splice('a', 'b', 'x')
        expect(murray.length).toBe(6)
        expect(result.length).toBe(0)
        expect(murray[0]).toBe('x')
        expect(murray[1]).toBe(1)
        expect(murray[2]).toBe(2)
    })

    it('Should take true as 1 and false as 0 if they are passed as 1st or 2nd argument', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        var result = murray.splice(true, false, 'x')
        expect(murray.length).toBe(6)
        expect(result.length).toBe(0)
        expect(murray[0]).toBe(1)
        expect(murray[1]).toBe('x')
        expect(murray[2]).toBe(2)
    })

    it('Should take \'undefined\' and \'null\' as 0 if it is specifyed as 1st or 2nd parameter', function() {
        var murray = new Murray(1, 2, 3, 4, 5)
        var result = murray.splice(undefined, null, 'x')
        expect(murray.length).toBe(6)
        expect(result.length).toBe(0)
        expect(murray[0]).toBe('x')
        expect(murray[1]).toBe(1)
        expect(murray[2]).toBe(2)
    })

    // Not so happy path </3

    it('should fail when applied on no-murray', function() {
        var noMurray = function(){}

        expect(function(){
            noMurray.splice(3, 2, 'hola')
        }).toThrowError(TypeError, 'noMurray.splice is not a function')

        expect(function(){
            true.splice(3, 2, 'hola')
        }).toThrowError(TypeError, 'true.splice is not a function')

        expect(function(){
            'hola'.splice(3, 2, 'hola')
        }).toThrowError(TypeError, '"hola".splice is not a function')

    })
})