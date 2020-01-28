function googl(query, callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://skylabcoders.herokuapp.com/proxy?url=https://www.google.com/search?q=' + query)

    xhr.onreadystatechange = function (res) {
        if (this.readyState === 4 && this.status === 200) {

            //console.log(this.responseText)
            var doc = new DOMParser().parseFromString(this.responseText, 'text/html') //returns a Document which is == to the document that we use to select hmtml elements.

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

                    // TODO description
                    var description = item.querySelector('span.st');

                    result.description = description.innerText;

                }

                results.push(result)
            }

            callback(results)

        }

    }
    xhr.send()

}

