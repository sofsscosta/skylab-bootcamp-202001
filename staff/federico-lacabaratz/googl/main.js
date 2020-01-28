var form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.querySelector('ul').innerHTML = ''

    var query = this.query.value;
    
    googl(query, function(results) {
        
        results.forEach(function(result) {
            
            var item = document.createElement('li');
            var title = document.createElement('h3');
            var description = document.createElement('p');
            
            title.innerText = result.title;
            description.innerText = result.description;
            
            document.querySelector('ul').appendChild(item);
            
            item.appendChild(title);
            item.appendChild(description);
        })
        console.log(results);
    });
});