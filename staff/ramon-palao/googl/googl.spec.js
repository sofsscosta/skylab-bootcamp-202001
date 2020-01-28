
// googl('pepito', function(results) { 
//     results.forEach(function(result) { 
//         console.log(result) 
//     })
//     results.forEach(function(result) {
//         console.assert(result.title && result.description, "should result have a title and description");
//     })
//     results.forEach(function(result) {
//         console.assert(result.title, "should result have a title");
//     })

//     results.forEach(function(result){
//         if(result.rating) console.assert(result.rating, "should show a rating if there is one");
//     });

//     results.forEach(function(result) {
//         console.assert(result.title && result.description && result.link, "should every result have a title, description and link");
//     });

//     results.forEach(function(result) {
//         console.assert(result instanceof Object, "should result have to be type of object");
//     });

//     results.forEach(function(result) {
//         console.assert(typeof result.title === "string", "should type of title be a string");
//         console.assert(typeof result.description === "string", "should type of result be a string");
//     });
    
//     console.log("%c should each item has at least a title and a description √", "color: green;");
//     console.log("%c should each item has a title √", "color: green;");
//     console.log("%c should show a rating if there is one √", "color: green;");
//     console.log("%c should every result have a title, description and link √", "color: green;");
//     console.log("%c should result have to be an instance of object √", "color: green;");
//     console.log("%c should type of title and type of description be a string √", "color: green;")
// });

describe("Googl Test", function(){
    it("should type of title be a string", function(done){
        googl("pepito", function(results){
            results.forEach(result => expect(typeof result.title).toBe("string"))
            done();
        }); 
    });

    it("should type of description be a string", function(done){
        googl("pepito", function(results){
            results.forEach(result => expect(typeof result.description).toBe("string"))
            done();
        });
    });

    
});

