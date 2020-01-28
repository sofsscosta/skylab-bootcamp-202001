// TODO create tests with just console.assert (check that each item has at least a title and a description)
// googl('pepito', function(results) { 
//     results.forEach(function(result) { 
//         console.log(result);
         
//         console.assert(!(result === undefined), "Should fail if there is no result");
//         console.assert(result.title, "Should fail if there are not title");
//         console.assert(result.description, "Should fail if there is no description");
//         //console.assert(result.rating, "should fail there is not rating"); ejemplo de error.
//     });
// });

describe("Googl.spec", function(){
    it("Should result not to be undefined", function(done){
        googl("pepito", function(results){
            expect(results).not.toBe(undefined)
            done();

        })
    })
    it("Should type of title and description to be a string", function(done){
        googl("pepito", function(results){
           results.forEach(result => expect(typeof result.title).toBe("string"));
           results.forEach(result => expect(typeof result.description).toBe("string"));
           done();
        })
    })
    
})