var form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    var query = this.query.value;

    googl(query, function(results) {
        console.log(results)
        
        var ul = document.createElement('ul');

        for (var i = 0; i < results.length; i++) {
            var result = results[i];

            var li = document.createElement('li');
            var h3 = document.createElement('h3');
            var resultTitle = document.createTextNode(result.title);
            h3.appendChild(resultTitle);
            li.appendChild(h3);
            
            if(result.rating) {
                var p = document.createElement('p');
                var rating = document.createTextNode(result.rating);
                p.appendChild(rating);
                li.appendChild(p);
            }
            
            var p = document.createElement('p');
            var description = document.createTextNode(result.description);
            p.appendChild(description);
            li.appendChild(p);
            ul.appendChild(li);
        }

        // var body = document.getElementsByTagName('body');
        // body.appendChild(ul);
        var div1 = document.getElementById("div1");
        div1.appendChild(ul);
    })
})