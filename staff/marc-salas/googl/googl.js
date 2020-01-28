function googl(query, callback) {
    if( typeof query === 'function' || typeof query === 'object' || query === undefined) {throw new TypeError('query should be a primitive value')}
    if( query === "") {throw new TypeError('query should have some string')}
    if( !(callback instanceof Function)) {throw new TypeError('TypeError callback should be a function')}
    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://skylabcoders.herokuapp.com/proxy?url=https://www.google.com/search?q=' + query)

    xhr.onreadystatechange = function (res) {
        //debugger
        if (this.readyState === 4 && this.status === 200) {
            //console.log(this.responseText)
            console.assert(this.readyState === 4, 'The page is not loaded propertly');
            console.assert(this.status === 200, 'Error')

            var doc = new DOMParser().parseFromString(this.responseText, 'text/html')

            var items = doc.querySelectorAll('div.g')

            var results = []
            for (var i = 0; i < items.length-2; i++) {
                var item = items[i]

                var title = item.querySelector('h3.LC20lb')

                if (title) {
                    var result = {}

                    result.title = title.innerText

                    var rating = item.querySelector('.slp.f')

                    if (rating) {
                        result.rating = rating.innerText
                    }

                    var description = item.querySelector('span.st');
                    if (description){
                        result.description = description.innerText;
                    }
                }

                results.push(result)
            }

            callback(results)
        }
    }

    xhr.send()
}