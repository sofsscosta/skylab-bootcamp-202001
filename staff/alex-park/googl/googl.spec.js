googl('pepito', function(results) { 
    results.forEach(function(result) { 
        console.log(result);
        console.assert(result.title, 'each post should have a title');
        console.assert(result.description, 'each post should have a small description');
        if (result.rating) { console.assert(typeof (parseInt(result.rating[13]) === 'number', 'the rating should be a number')) }
    })
})