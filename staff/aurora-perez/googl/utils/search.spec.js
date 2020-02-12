describe ('search', function(){
    it ('should fail if the url is incorrect', function(){
        expect(function() {
            search(undefined, 1, 2, 3, 4, function(){})
        }).toThrowError(TypeError, 'undefined is not a string')

    })

})