'use strict'

function Search(props) {
    var search = document.createElement('section')
    search.classList.add('search')

    Interactive.call(this, search)

    search.innerHTML = '<form class="search__form"><input class="search__query" type="text" name="query" placeholder="Search...">'
        .concat('<button class="search__submit" type="submit"><i class="fas fa-search"></i></button></form>')
    
    search.addEventListener('submit', function(event) {
        event.preventDefault()

        var query = this.querySelector('form').query.value

        props.onSubmit(query)
    })
 }

Search.prototype = Object.create(Interactive.prototype)
Search.prototype.constructor = Search

Search.prototype.__locateFeedbackInContainer__ = function(feedback) {
    this.container.append(feedback.container)
}

Search.prototype.__removeFeedbackFromContainer__ = function(feedback) {
    setTimeout(function() {
        this.removeChild(feedback.container)
    }.bind(this.container), 3000)
}