describe("SHIFT", function(){
    it ("Should take off the first position of an array", function(){
        (function(){
            var array=["kike", "carlos", "monica", "ana"];
            var result = (shift(array));
            assert(result === "kike", "The result should be 'kike'");
            assert(array[0] === "carlos", "The index 0 element should be 'carlos'");
            assert(array[1] === "monica", "The index 1 element should be 'monica'");
            assert(array[2] === "ana", "The index 2 element should be 'ana'");
            assert(array.length === 3, "The length should be 3")
        })();
    });

    it ("should fail if the argument is not an array", function(){
        (function(){
            var _error;
            try{
                shift(4);
            }
            catch(error){
                _error = error
            }
            assert(_error instanceof TypeError, "error should be of TypeError");
            assert(_error.message === "4 is not an array", 'should fail with message "4 is not an array"');

        })();
    });
});