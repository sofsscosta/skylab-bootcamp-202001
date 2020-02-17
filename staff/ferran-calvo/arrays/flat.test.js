describe("FLAT", function(){
    it("It should be array = [1, 2, 3, 4]", function(){
        (function(){
            var array = [1,2,[3,4]];
            var result = [1,2,3,4];
            var newArray = flat(array);
            assert(newArray[0] === result[0], "el elemento de índice 0 no es correcto");
            assert(newArray[1] === result[1], "el elemento de índice 1 no es correcto");
            assert(newArray[2] === result[2], "el elemento de índice 2 no es correcto");
            assert(newArray[3] === result[3], "el elemento de índice 3 no es correcto");
        })();
    });

    it("It should be array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]", function(){
        (function(){
            var newArray =[];
            var array = [1, 2, [3, 4,[5,6,[7,8,9,[10,11,12]]]]];
            var result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            newArray = flat(array,4);
            assert(newArray[0] === result[0], "el elemento de índice 0 no es correcto");
            assert(newArray[1] === result[1], "el elemento de índice 1 no es correcto");
            assert(newArray[2] === result[2], "el elemento de índice 2 no es correcto");
            assert(newArray[3] === result[3], "el elemento de índice 3 no es correcto");
            assert(newArray[4] === result[4], "el elemento de índice 4 no es correcto");
            assert(newArray[5] === result[5], "el elemento de índice 5 no es correcto");
            assert(newArray[6] === result[6], "el elemento de índice 6 no es correcto");
            assert(newArray[7] === result[7], "el elemento de índice 7 no es correcto");
            assert(newArray[8] === result[8], "el elemento de índice 8 no es correcto");
            assert(newArray[9] === result[9], "el elemento de índice 9 no es correcto");
            assert(newArray[10] === result[10], "el elemento de índice 10 no es correcto");
            assert(newArray[11] === result[11], "el elemento de índice 11 no es correcto");
            assert(newArray[12] === result[12], "el elemento de índice 12 no es correcto");
        })();
    });
    


});