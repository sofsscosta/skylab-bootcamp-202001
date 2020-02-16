describe ('toString', function() {
    it ('should return a string', function () {
        var result = toString(['olá', 'hola', 'salut', 'ciao'])
        assert(typeof result === 'string', 'result should be a string, but instead it is a ' + typeof result)
    })

    it ('should fail if an array is not passed', function() {
        (function(){
            var _error;
            try{
                toString(1);
            } catch (error){
                _error = error;
            } finally {
                assert(_error instanceof TypeError, "should the error be of type TypeError");
                assert(_error.message === "1 is not an Array", "should fail with message '1 is not a function'");
            }
        })();

        (function(){
            var _error;
            try{
                toString('ramon');
            } catch (error){
                _error = error;
            } finally {
                assert(_error instanceof TypeError, "should the error be of type TypeError");
                assert(_error.message === "ramon is not an Array", "should fail with message 'ramon is not a function'");
            }
        })();
        
    })
})