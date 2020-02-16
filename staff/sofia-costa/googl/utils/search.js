var URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/

function search(url, resultsSelector, titleSelector, linkSelector, contentSelector, callback) {
    if (!URL_REGEX.test(url)) throw new SyntaxError(url + ' is not an url');
    if (typeof resultsSelector !== 'string') throw new TypeError(resultsSelector + ' is not a string');
    if (typeof titleSelector !== 'string') throw new TypeError(titleSelector + ' is not a string');
    if (typeof linkSelector !== 'string') throw new TypeError(linkSelector + ' is not a string');
    if (typeof contentSelector !== 'string') throw new TypeError(contentSelector + ' is not a string');
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

                    if (link && link !== undefined && link !== null)
                        result.link = link.href.trim();
                        
                    var description = item.querySelector(contentSelector);
                    if (description && description !== undefined && description !== null)
                        result.description = description.innerText;
                }

                results.push(result)
            }

            callback(results)

        }

    });
}
