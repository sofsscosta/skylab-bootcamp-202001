describe('Some',function(){

    it('should return true (boolean)', function(){
        var array = [1,2,3];
        var results = some(array,function(elem){
            return elem === 1})

        assert(results === true, 'should return a true (boolean)');
    });
    
    it('Verifies at least one number is bigger than 2', function(){
        var array = [1,2,3];
        var results = some(array,function(number) {
            return number > 2});

        assert(results === true, 'Verifies at least one number is bigger than 2');
    });

    it('should at least one element be a string', function(){
        var array = ['code','js', 'array'];
        var results = some(array, function(elem){
            return typeof elem === 'string'});

        assert(results === true, 'should at least one element be a string');
    });

    it('should fail if the second parameter is not a function', function(){
        var _error;

        try{
            some([1,2], {})
        }catch(error){
            _error = error;
        }
        assert(_error instanceof TypeError, 'should be an error: TypeError, but got ', + _error);
        assert(_error.message === '[object Object] is not a function', 'should show the message: [object Object] is not a function');
    });
});