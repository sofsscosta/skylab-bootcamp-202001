googl('pepito', function(results) {
            results.forEach(function(result) {
                    console.log(result)
                    assert(!(result === undefined, "Should be undefined") assert(result.title, "Should print all the titles if not it print an error"); assert(result.description, "Should print an error if it doesn't have all the descriptions");
                    })
            })