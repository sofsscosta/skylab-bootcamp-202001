'use strict';

function search(url, resultsSelector, titleSelector, linkSelector, contentSelector, callback) {
    if (typeof url !== 'string') throw new TypeError(url + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    call('https://skylabcoders.herokuapp.com/proxy?url=' + url, function (response) {
        if (response.status === 200) {

            var doc = new DOMParser().parseFromString(response.content, 'text/html') //returns a Document which is == to the document that we use to select hmtml elements.

            var items = doc.querySelectorAll(resultsSelector)

            var results = []

            for (var i = 0; i < items.length; i++) {
                var item = items[i]

                var title = item.querySelector(titleSelector)

                if (title) {
                    var result = {}

                    result.title = title.innerText

                    var link = item.querySelector(linkSelector);

                    if (link)
                        result.link = link.href.trim();

                    // var rating = item.querySelector(ratingSelector)

                    // if (rating !== undefined) {
                    //     result.rating = rating.innerText
                    // }

                    // TODO description
                    var description = item.querySelector(contentSelector);

                    result.description = description.innerText;

                }

                results.push(result)
            }

            callback(results)

        }

    });
}
