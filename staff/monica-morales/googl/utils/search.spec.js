'use strict';

describe('search', function(){
    
    it('should fail if callback is not a function', function(){
        expect(function(){
            search('https://www.google.es', 'resultsSelector', 'titleSelector', 'linkSelector', 'contentSelector', 1);
        }).toThrowError(TypeError, '1 is not a function');
        
    })

    it('should fail if url is not valid', function(){
        expect(function(){
            search(undefined, 'resultsSelector', 'titleSelector', 'linkSelector', 'contentSelector', function(){});
        }).toThrowError(TypeError, 'undefined is not a string');
        
    })
})


