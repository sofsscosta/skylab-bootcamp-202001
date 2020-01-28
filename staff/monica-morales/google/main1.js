var form = document.querySelector('form');

form.addEventListener('submit', function(event){

    event.preventDefault();

    var query = this.query.value;

    googl(query, function(results){

        function makeUL(array) {
        
            var list = document.createElement('ul');
            for (var i = 0; i < array.length; i++) {
            
                var resultado = document.createElement('li');
                var titulo = document.createElement('h3');
                var description =document.createElement('p');
                
                titulo.appendChild(document.createTextNode(array[i].title));
                description.appendChild(document.createTextNode(array[i].description));
                
                list.appendChild(resultado);
                resultado.appendChild(titulo);
                resultado.appendChild(description);
            }
    
        return list;
        }

        form.appendChild(makeUL(results));
    });
})


























