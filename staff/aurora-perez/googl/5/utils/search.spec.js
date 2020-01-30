describe('search', function() {
    
    it('should throw an error if url is not a string', function(){
        expect(function(){
            search(2)
        }).toThrowError(TypeError, '2 is not a string')
    })

    it('should throw an error if callback is not a function', function(){
        expect(function(){
            search('https://skylabcoders.com', 23, 23, 23, 23, 23)
        }).toThrowError(TypeError, '23 is not a function')
    })






})