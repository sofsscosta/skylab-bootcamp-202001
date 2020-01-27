function googl(query, callback) {
    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://www.google.com/search?q=' + query)

    xhr.onreadystatechange = function (res) {
        if (this.readyState === 4 && this.status === 200) {
            //console.log(this.responseText)

            var doc = new DOMParser().parseFromString(this.responseText, 'text/html');
            
            var items = doc.querySelectorAll('div.g');

            var results = []

            for (var i = 0; i < items.length-2; i++) {
                var item = items[i]

                var title = item.querySelector('h3.LC20lb')

                if (title) {
                    var result = {}

                    result.title = title.innerText

                    var rating = item.querySelector('.slp.f')
                }
                if (rating) {
                    result.rating = rating.innerText
                }
                    
                var description = item.querySelector('.st') 

                if(description) {
                    result.description = description.innerText
                } 
                
                results.push(result)
            }

            callback(results)
        }
    }
    xhr.send()
  }