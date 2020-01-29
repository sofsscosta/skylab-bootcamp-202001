googl('pepito', function(results) { 
    results.forEach(function(result) { 
        console.log(result);
        console.assert(!(result === undefined), 'Should fail if there is not a result');
        console.assert(result.title, 'Should fail, because each item should have at least a title');
        console.assert(result.description, 'Should fail, because each item should have at least a title and a description');
    });
});