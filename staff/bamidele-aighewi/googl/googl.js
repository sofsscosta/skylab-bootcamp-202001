function googl(query, callback) {
    if (typeof query === 'function' || typeof query === 'object' || typeof query === 'undefined') throw new TypeError('Expects query to be a primitive value. ' + (typeof query) + ' given');
    if (typeof query !== 'undefined' && !query.toString().length) throw new RangeError('Expects length of query value to be at least 1. None given')
    if (!(callback instanceof Function)) throw new TypeError('callback is not a function. "' + (typeof callback) + '" given');

    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://www.google.com/search?q=' + query);

    xhr.onreadystatechange = function (res) {
        //debugger
        if (this.readyState === 4 && this.status === 200) {
            //console.log(this.responseText)

            var doc = new DOMParser().parseFromString(this.responseText, 'text/html')

            var items = doc.querySelectorAll('div.g')

            var results = []

            for (var i = 0; i < items.length; i++) {
                var item = items[i]

                var title = item.querySelector('h3.LC20lb')

                if (title) {
                    var result = {}

                    result.title = title.innerText

                    var rating = item.querySelector('.slp.f')

                    if (rating) {
                        result.rating = rating.innerText
                    }

                    var description = item.querySelector('span.st').innerText;
                    if (description) {
                        result.description = description;
                    }
                }

                results.push(result)
            }

            callback(results)
        }
    }

    xhr.send()
}