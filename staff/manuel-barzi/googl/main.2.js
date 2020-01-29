var search = createSearch('.search', function (query) {
    googl(query, function (results) {
        createResults('.results', results);
    });
});

// createSearch('.search-2', function (query) {
//     googl(query, function (results) {
//         createResults('.results-2', results);
//     });
// });

// createSearch('.search-3', function (query) {
//     googl(query, function (results) {
//         createResults('.results-3', results);
//     });
// });

var login = document.querySelector('button');
login.addEventListener('click', function() {
    //var search = document.querySelector('.search');

    search.classList.remove('search--hide');
});
