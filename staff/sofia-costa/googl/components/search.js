function createSearch (selector, callback) {

    var search = document.querySelector(selector)

    search.addEventListener('submit', function(event) {

        event.preventDefault();
    
        var query = this.query.value;

        callback(query)
    })

    return search;

}