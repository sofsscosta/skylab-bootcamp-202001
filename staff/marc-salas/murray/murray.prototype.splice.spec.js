describe('murray.prototype.splice',function(){
    it('should return a Murray with the deleted elements', function(){
        var murray = new Murray(1,2,3,4,5);
        var result = murray.splice(3);

        expect(result[0]).toBe(4);
        expect(result[1]).toBe(5);
        expect(result).toBeInstanceOf(Murray);

    });

    it('should the original Murray be modyfied from the start index', function(){
        var murray = new Murray(1,2,3,4,5);
        var result = murray.splice(3);

        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(2);
        expect(murray[2]).toBe(3);
        expect(murray).toBeInstanceOf(Murray);

    });

    it('should return an empty Murray if no elements are removed', function(){
        var murray = new Murray(1,2,3,4,5);
        var result = murray.splice();

        expect(result.length).toBe(0);
    });

    it('should start at index 4 if the given index is higher than Murray length', function(){
        var murray = new Murray(1,2,3,4,5);
        murray.splice(8, 0, 6);

        expect(murray[5]).toBe(6);
    });

    it('should start at Murray length -2 when -2 is given as first parameter', function(){
        var murray = new Murray(1,2,3,4,5);
        var result = murray.splice(-2);
        
        expect(result[0]).toBe(4);
        expect(result[1]).toBe(5);       
    });
    
    it('should start at index 0 when Murray length - start index is less than 0',function(){
        var murray = new Murray(1,2,3);
        var result = murray.splice(-5);

        expect(murray[0]).toBeUndefined();
        expect(murray[1]).toBeUndefined();
        expect(murray[2]).toBeUndefined();
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result.length).toBe(3);
    });

    it('should delete two elements starting at given index', function(){
        var murray = new Murray(1,2,3,4,5);
        murray.splice(1, 2);

        expect(murray[0]).toBe(1);
        expect(murray[1]).toBe(4);
        expect(murray[2]).toBe(5);
        expect(murray.length).toBe(3);
    });

    it('should delete all the elements starting at index when delete count is higher than remaining elements', function(){
        var murray = new Murray(1,2,3,4,5);
        murray.splice(1, 8);

        expect(murray[0]).toBe(1);
        expect(murray.length).toBe(1);
    });

    it('should add "Homer" at given start index', function(){
        var murray = new Murray(1,2,3,4,5);
        murray.splice(1,0,'Homer');

        expect(murray[1]).toBe('Homer');
        expect(murray.length).toBe(6);
    });

    it('should use value 0 when no-Number start index and count are given', function(){
        var murray = new Murray(1,2,3);
        murray.splice("a",function(){},0);

        expect(murray[0]).toBe(0);
        expect(murray[1]).toBe(1);
        expect(murray[2]).toBe(2);
        expect(murray[3]).toBe(3);
    });


});
// describe('Murray.prototype.splice()', function() {
//     it('Should delete all the elements from start to the end of the murray and return the deleted values if only one argument is passed', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(2)
//         for(var i = 0; i < result.length; i++) {
//             expect(result[i]).toBe(i + 3)
//         }
//         for(var i = 0; i < murray.length; i++) {
//             expect(murray[i]).toBe(i + 1)
//         }
//         expect(murray.length).toBe(2)
//         expect(result.length).toBe(3)
//     })
//     it('Should not to delete values and return an empty murray when passed a first argument greater than the length of the murray', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(8)
//         expect(result.length).toBe(0)
//         expect(murray.length).toBe(5)
//         for(var i = 0; i < murray.length; i++) {
//             expect(murray[i]).toBe(i + 1)
//         }       
//     })
//     it('Should the start begin from the end of the murray when passed a lone negative parameter', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(-2)
//         expect(murray.length).toBe(3)
//         for(var i = 0; i < murray.length; i++) {
//             expect(murray[i]).toBe(i + 1)
//         }
//         expect(result.length).toBe(2)
//         for(var i = 0; i < result.length; i++) {
//             expect(result[i]).toBe(i + 4)
//         }
//     })
//     it('Should delete and return the entire murray if the start position is below the  0 index', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(-10)
//         expect(murray.length).toBe(0)
//         expect(result.length).toBe(5)
//         for(var i = 0; i < result.length; i++) {
//             expect(result[i]).toBe(i + 1)
//         }
//     })
//     it('Should return a segment of the array when is passed 2 parameters', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(1, 3)
//         expect(murray.length).toBe(2)
//         expect(murray[0]).toBe(1)
//         expect(murray[1]).toBe(5)
//         expect(result.length).toBe(3)
//         for(var i = 0; i < result.length; i++) {
//             expect(result[i]).toBe(i + 2)
//         }
//     })
//     it('Should return an empty murray and not delete values from the original murray when a 0 is passed as second parameter', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(1, 0)
//         expect(murray.length).toBe(5)
//         expect(result.length).toBe(0)
//         for(var i = 0; i < murray.length; i++) {
//             expect(murray[i]).toBe(i + 1)
//         }
//     })
//     it('Should delete and return all the values from the start if the second argument is greater than the murray length', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(1, 10)
//         expect(murray.length).toBe(1)
//         expect(result.length).toBe(4)
//         for(var i = 0; i < murray.length; i++) {
//             expect(murray[i]).toBe(i + 1)
//         }
//         for(var i = 0; i < result.length; i++) {
//             expect(result[i]).toBe(i + 2)
//         }
//     })
//     it('Should create a new item within start and start + 1 with the valueof the 3rd argument when a 0 is passed as second argument and return an empty murray not deleting items in the original array', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(1, 0, 'x')
//         expect(murray.length).toBe(6)
//         expect(result.length).toBe(0)
//         expect(murray[0]).toBe(1)
//         expect(murray[1]).toBe('x')
//         expect(murray[2]).toBe(2)
//     })
//     it('Should overwrite deleteIndex elements from start (including) with the third value and return the overwrited elements', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(1, 2, 'x')
//         expect(murray.length).toBe(4)
//         expect(result.length).toBe(2)
//         expect(murray[0]).toBe(1)
//         expect(murray[1]).toBe('x')
//         expect(murray[2]).toBe(4)
//         expect(result[0]).toBe(2)
//         expect(result[1]).toBe(3)
//     })
//     it('Should include n values if more than 3 parameters are passed', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(1, 2, 'x', 'y', 'z')
//         expect(murray.length).toBe(6)
//         expect(result.length).toBe(2)
//         expect(murray[0]).toBe(1)
//         expect(murray[1]).toBe('x')
//         expect(murray[2]).toBe('y')
//         expect(murray[3]).toBe('z')
//         expect(murray[4]).toBe(4)
//     })
//     it('Should work as if the second value is 0 if it is a negative number', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(1, -10, 'x')
//         expect(murray.length).toBe(6)
//         expect(result.length).toBe(0)
//         expect(murray[0]).toBe(1)
//         expect(murray[1]).toBe('x')
//         expect(murray[2]).toBe(2)
//     })
//     it('Should not fail if the first or the second parameters are not integeer numbers rounding them by defect', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(1.6, 2.1, 'x')
//         expect(murray.length).toBe(4)
//         expect(result.length).toBe(2)
//         expect(murray[0]).toBe(1)
//         expect(murray[1]).toBe('x')
//         expect(murray[2]).toBe(4)
//         expect(result[0]).toBe(2)
//         expect(result[1]).toBe(3)
//     })
//     it('Should start and deleteIndex be 0 if a non numeric value is passed as firs, second or both parameters', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice('a', 'b', 'x')
//         expect(murray.length).toBe(6)
//         expect(result.length).toBe(0)
//         expect(murray[0]).toBe('x')
//         expect(murray[1]).toBe(1)
//         expect(murray[2]).toBe(2)
//     })
//     it('Should take true as 1 and false as 0 if they are passed as 1st or 2nd argument', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(true, false, 'x')
//         expect(murray.length).toBe(6)
//         expect(result.length).toBe(0)
//         expect(murray[0]).toBe(1)
//         expect(murray[1]).toBe('x')
//         expect(murray[2]).toBe(2)
//     })
//     it('Should take \'undefined\' and \'null\' as 0 if it is specifyed as 1st or 2nd parameter', function() {
//         var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(undefined, null, 'x')
//         expect(murray.length).toBe(6)
//         expect(result.length).toBe(0)
//         expect(murray[0]).toBe('x')
//         expect(murray[1]).toBe(1)
//         expect(murray[2]).toBe(2)
//     })
//     it('Should throw a reference error if a not defined variable is passed as any parameter', function() {
//         expect(function() {
//             var murray = new Murray(1, 2, 3, 4, 5)
//         var result = murray.splice(notDefinedVariable, 2, 'x', 'y', 'z')
//         }).toThrowError(ReferenceError, 'notDefinedVariable is not defined')
//     })
// })