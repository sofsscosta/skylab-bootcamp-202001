'use strict';

function ecosia(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://skylabcoders.herokuapp.com/proxy?url=https://www.ecosia.org/search?q=' + query);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var doc = new DOMParser().parseFromString(this.responseText, 'text/html');

            var items = doc.querySelectorAll('.result.js-result');

            var results = [];

            for (var i = 0; i < items.length; i++) {
                var item = items[i];

                var title = item.querySelector('.result-title');

                if (title) {
                    var result = {};

                    result.title = title.innerText;
                    result.link = title.href;

                    var description = item.querySelector('.result-snippet');

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