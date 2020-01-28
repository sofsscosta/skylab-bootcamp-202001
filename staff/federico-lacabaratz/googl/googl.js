function googl(query, callback) {
    if (callback instanceof Array) throw new TypeError(callback.constructor.name + ' is not a function');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://skylabcoders.herokuapp.com/proxy?url=https://www.google.com/search?q=' + query);

    xhr.onreadystatechange = function (res) {
        //debugger
        if (this.readyState === 4 && this.status === 200) {
            //console.log(this.responseText)

            var doc = new DOMParser().parseFromString(this.responseText, 'text/html')

            var items = doc.querySelectorAll('div.g')

            var results = []

            for (var i = 0; i < items.length; i++) {
                var item = items[i]

                var title = item.querySelector('h3.LC20lb');

                if (title) {
                    var result = {};

                    result.title = title.innerText;

                    var rating = item.querySelector('.slp.f');
                    
                    if (rating) {
                        result.rating = rating.innerText;
                    }
                    
                    var description = item.querySelector('.st');

                    result.description = description.innerText;
                    var link = item.querySelector('.iUh30')
                    result.link = link.innerText
                    results.push(result);
                }

            };

            callback(results);
        }
    };

    xhr.send();
};

function googl(query, callback) {
    if (callback instanceof Array) throw new TypeError(callback.constructor.name + ' is not a function');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    var xhr = new XMLHttpRequest
    xhr.open('GET', 'https://skylabcoders.herokuapp.com/proxy?url=https://www.google.com/search?q=' + query)
    xhr.onreadystatechange = function (res) {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.readyState)
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
                    var description = item.querySelector('.st')
                    result.description = description.innerText
                    var link = item.querySelector('.iUh30')
                    result.link = link.innerText
                    results.push(result)
                }
                else ''
            }
            callback(results)
        }
    }
    xhr.send()
}





