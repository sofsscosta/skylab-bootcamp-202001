describe ('Murray.prototype.concat', function() {
    it('should return an array that concatenates the arrays passed in the arguments and the original one', function() {
        var murray = new Murray(1, 2, 3);
        var murray2 = new Murray(4, 5, 6)
        var murray3 = new Murray(7, 8, 9)

        result = murray.concat(murray2, murray3)

        expect(result).toBeInstanceOf(Murray);

        for (var i = 0; i < 3; i++)
            expect(result[i]).toBe(i + 1);
        
        for (var i = 3; i < 6; i++)
            expect(result[i]).toBe(i + 1);
        
        for (var i = 6; i < 9; i++)
            expect(result[i]).toBe(i + 1); 
    })

    it('should return an array which\'s length is equal to its length plus the length of each added array', function() {
        var murray = new Murray(1, 2, 3);
        var murray2 = new Murray(4, 5, 6)
        var murray3 = new Murray(7, 8, 9)

        var result = murray.concat(murray2, murray3)

        expect(result).toBeInstanceOf(Murray);

        expect(result.length).toBe( 3 + murray2.length + murray3.length)

    })

    it ('should return an array which\'s values are equal to the values it has and the values the arrays passed have', function() {
        var murray = new Murray(1, 2, 3);
        var murray2 = new Murray(4, 5, 6)
        var murray3 = new Murray(7, 8, 9)

        murray.concat(murray2, murray3)
        expect(result).toBeInstanceOf(Murray);
        
            for (var j = 0; j<murray2.length; j++)
                expect(result[j+3]).toBe(murray2[j])
            for (var k = 0; k<murray3.length; k++)
                expect(result[k+6]).toBe(murray3[k])
    })

    it('should return the original array if no arrays are passed to concat', function() {
        var murray = new Murray(1, 2, 3);
        var result = murray.concat()

        expect(result).toBeInstanceOf(Murray);

        for(var i = 0; i<result.length; i++)
            expect(result[i]).toBe(murray[i])
    })

    it('should add other types of values that are not arrays', function(){
        var murray = new Murray(1, 2, 3);
        var fun = function(){}

        var result = murray.concat(fun)
        
        expect(result).toBeInstanceOf(Murray);
        expect(result[3]).toBe(fun)


        var murray2 = new Murray(1, 2, 3);
        var letter = 'a'

        var result1 = murray2.concat(letter)

        expect(result1[3]).toBe(letter)
        

        var murray3 = new Murray(1, 2, 3);
        var result2 = murray3.concat(letter, fun)

        expect(result2[3]).toBe(letter)
        expect(result2[4]).toBe(fun)
    })

    it('should fail if an array or a string is not passed to be concatenated', function() {
        expect(function() {
            true.concat([1, 2, 3])
        }).toThrowError(TypeError, 'true.concat is not a function')
    })
})