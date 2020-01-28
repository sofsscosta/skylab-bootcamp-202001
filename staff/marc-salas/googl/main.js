var from = document.querySelector('form');

from.addEventListener('submit', function(event){
    event.preventDefault();

    var query = this.query.value;
    
    var ul = document.createElement('ul');
    googl(query, function(results){
        for (var i =0; i < results.length; i++){
            var result = results[i];
            var li = document.createElement('li');
            var h3 = document.createElement('h3');
            var p = document.createElement('p');
            p.innerHTML = result.description;
            h3.innerHTML = result.title;
            li.append(h3,p);
            ul.append(li)
        }
    });
    var main = document.querySelector('#main');
    main.innerHTML = " ";
    main.append(ul);
}); 