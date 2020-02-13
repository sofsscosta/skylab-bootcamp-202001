    googl('pepito', function(results) { 
        results.forEach(function(result) { 
            console.log(result) 
            console.assert(result.title, 'not all have title')
            console.assert(result.description, 'not all have description')
            console.assert(result.rating, 'not all have rating')
    
        })
    })