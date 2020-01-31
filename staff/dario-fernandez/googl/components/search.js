'use strict'

function Search(props) {
    var search = document.createElement('form')
    search.classList.add('search')

    search.innerHTML = '<h1 class="search__title">Googl</h1>'
        .concat('<input class="search__query" type="text" name="query" placeholder="Search...">')
        .concat('<button class="search__submit" type="submit">Search</button>')
    
    search.addEventListener('submit', function(event) {
        event.preventDefault()

        var query = this.query.value

        props.onSubmit(query)
    })
 
    return search
}