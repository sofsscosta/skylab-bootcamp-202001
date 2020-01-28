var form = document.querySelector('form');
var ul = document.querySelector('ul')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    var query = form.query.value
    googl(query, function(results){
        results.forEach(function(result) {
            var h3 = result.title
            var p = result.description
            var span = result.rating
            if(span) {
                ul.innerHTML += '<li><h3>' + h3 + '</h3><span>' + span + '</span><p>' + p + '</p></li>'

            } else {
                ul.innerHTML += '<li><h3>' + h3 + '</h3><p>' + p + '</p></li>'
            }
            
        })
    })
})