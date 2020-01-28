(function () {
    try {
        var _error;
        googl('pepito', 1);

    } catch (error) {
        _error = error;
    }
    console.assert(_error instanceof TypeError, 'should error be of TypeError, but got ' + _error.constructor.name);
    console.assert(_error.message === '1 is not a function', 'should error message be "1 is not a function", but got ' + _error.message);

})();


googl('pepito', function (results) {
    results.forEach(function (result) {
        console.log(result)
        console.assert(result, 'should the query have a result');
        console.assert(result.title, 'should the result have a title');
        console.assert(result.description, 'should the result have a description');

    });
})