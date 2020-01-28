function googl(query, callback) {
    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://skylabcoders.herokuapp.com/proxy?url=https://www.google.com/search?q=' + query)

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
                    
                    result.description = item.querySelector('span.st').innerText;
                    
                    var rating = item.querySelector('.slp.f')

                    if (rating) {
                        result.rating = rating.innerText
                    }
                    // TODO description
                    // var descriptionNodes = document.querySelectorAll('span.st'); 
                    // var descriptionText = [];
                    // for (var i = 0; i < descriptionNodes.length; i++) {
                    //     descriptionText[i] = descriptionNodes[i].innerText;
                    // }
                    // console.log(descriptionText);
                }

                results.push(result)
            }

            callback(results)
        }
    }

    xhr.send()
}