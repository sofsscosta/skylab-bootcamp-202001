googl('pepito', function(results) { 
    results.forEach(function(result) { 
        console.assert(result.title,'should every result have s description');
        console.assert(result.description, 'should every result have a description');

        console.log(result) 
    })
});