// TODO create tests with just console.assert (check that each item has at least a title and a description)
googl('pepito', function(results) { 
    results.forEach(function(result) { 
       console.log(result) 
    })
});

console.assert(!(result === undefined),'Should fail if there is no result');
console.assert((result.title),'Should fail if there is no title');
console.assert((result.description),'Should fail if there is no description');