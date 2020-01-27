googl('pepito', function(results) { 
    results.forEach(function(result) { 
        console.log(result);

        console.assert(result.title, 'should have a title');
        console.assert(result.description, 'should have a description');
    });
});