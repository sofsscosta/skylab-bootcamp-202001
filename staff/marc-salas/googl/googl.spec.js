describe('googl aplication',function(){

    it('should all the results have a title', function(){
        googl('pepito', function(results) { 
            results.forEach(function(result) { 
                expect(result.title.length > 0).toBe(true)
            })
        });
    })

});



// (function(){
//     try{
//         googl('pepito', 1);
//     } catch(error){
//        var _error = error;
//     }
//     console.assert(_error instanceof TypeError, 'Wrong error data type');

// })();