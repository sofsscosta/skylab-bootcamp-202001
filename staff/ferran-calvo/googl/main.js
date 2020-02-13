var form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    var query = this.query.value;
    googl(query, function(results) {
        var ul = document.createElement('ul');
        for (var i=0; i<results.length; i++){
            var li= document.createElement('li')
            var h3 = document.createElement('h3');
            var p = document.createElement('p');
            var resultTitle = document.createTextNode(results[i].title);
            var description = document.createTextNode(results[i].description);
            p.appendChild(description);
            h3.appendChild(resultTitle);
            li.appendChild(h3);
            li.appendChild(p);
            ul.appendChild(li);
        }
        var div1 = document.getElementById("div1");
        div1.appendChild(ul);
    })
})