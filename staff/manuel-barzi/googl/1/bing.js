'use strict';

function bing(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://skylabcoders.herokuapp.com/proxy?url=https://www.bing.com/search?q=' + query);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var doc = new DOMParser().parseFromString(this.responseText, 'text/html');

            var items = doc.querySelectorAll('li.b_algo');

            var results = [];

            for (var i = 0; i < items.length; i++) {
                var item = items[i];

                var title = item.querySelector('h2>a');

                if (title) {
                    var result = {};

                    result.title = title.innerText.trim();
                    result.link = title.href.trim();

                    var description = item.querySelector('p');

                    if (description)
                        result.description = description.innerText.trim();

                    results.push(result);
                }
                
            }

            callback(results);
        }
    }

    xhr.send();
}