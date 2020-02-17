'use strict'

console.log('TEST reduce');
(function(){
    console.log('should return a number');
    var nums = [0,1,2,3,4];
    var reduceTest1 = reduce(nums,function(a,b){
    return a + b;
    });
    console.assert(isNaN(reduceTest1) === false, 'should be return a number');
});

(function(){
    console.log("We check if the first argument is an array")

    var _error;
    try {
        reduce(1,function(a,b){
            return a + b;
        });
    }catch(error) {
        _error = error
        
    }finally {
        console.assert(_error instanceof TypeError, "should error be of type TypeError");
        console.assert(_error.message === "1 should be an error","should return: 1 should be an error " );
     }
})();
