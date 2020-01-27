
googl('pepito', function (results) {
    results.forEach(function (result) {
        console.log(result)
        console.assert(result.title, 'should the result have a title');
        console.assert(result.description, 'should the result have a description');

    });
})
