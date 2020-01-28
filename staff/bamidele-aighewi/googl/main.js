var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    var query = this.query.value;

    var ol = document.createElement('ol');

    googl(query, function (results) {
        for (var x = 0; x < results.length; x++) { 
            var item = results[x];
            var li = document.createElement('li');
            var h3 = document.createElement('h3');
            var p = document.createElement('p');
            
            h3.innerHTML = item.title;
            p.innerHTML = item.description;
            li.append(h3, p);
            ol.append(li);
        }

        var resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';
        resultsContainer.append(ol);
    })
});