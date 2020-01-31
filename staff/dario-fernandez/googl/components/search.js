'use strict'

function createSearch(selector, props) {
    var search = document.querySelector(selector)

    search.toggle = function() {
        this.classList.toggle('search--hide')
    }

    search.addEventListener('submit', function(event) {
        event.preventDefault()

        var query = this.query.value

        props.onSubmit(query)
    })
    return search
}