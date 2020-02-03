describe("map",function(){
    it("should multiply each element by 4",function(){
        var array = [4,7,6,0];
        var expression = function(elem){return elem * 4};
        var result = map(array,expression);

        assert(result[result.length - 1] == 0 ,"result should be equal 0, but got " + result[result.length - 1]);
    });
    it("should return length equal to 4",function(){
        var array = [4,7,6,0];
        var expression = function(elem){return elem + 2};
        var result = map(array,expression);

        assert(result.length === 4, "should return 4, but got " + result.length);
    })

})







// "use strict";

// console.log("TEST map");


// var result = [1,3,5,6,7,5];
// var expresion = function(elem) {return elem + 10};
// var result = map(result,expresion);

// console.assert(result.length === 6, "results length should equal 6");

// console.assert(result[0] === 11, "this should be 11"); 
// console.assert(result[1] === 13, "this should be 13"); 
// console.assert(result[2] === 15, "this should be 15"); 
// console.assert(result[3] === 14, "result[3] this should be 16"); 
// console.assert(result[4] === 17, "this should be 17"); 
// console.assert(result[5] === 15, "this should be 19"); 


