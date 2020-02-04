'use strict'

describe('POP TEST', function(){

    it('should delete one number of the original array', function(){
        console.log('hola')
        var a = [1,2,3,4]
        pop(a)
        assert('Should delete one value of the array', a.length === 4);

    });



})