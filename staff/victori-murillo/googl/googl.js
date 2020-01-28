function googl(query, callback) {
  if(query instanceof Array) throw new TypeError(query.constructor.name + " is not a string")
  if(typeof query !== 'string') throw new TypeError(query + " is not a string")

  if(callback instanceof Array) throw new TypeError(callback.constructor.name + " is not a function")
  if(!(typeof callback === 'function')) throw new TypeError(callback + " is not a function")

  var xhr = new XMLHttpRequest
  var url = 'https://skylabcoders.herokuapp.com/proxy?url=https://www.google.com/search?q='

  xhr.open('GET', url + query)

  xhr.onreadystatechange = function(res) {

    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText)

      var doc = new DOMParser().parseFromString(this.responseText, 'text/html')

      var items = doc.querySelectorAll('div.g')

      var results = []

      for (let i = 0; i < items.length; i++) {

        var item = items[i]

        var title = item.querySelector("h3.LC20lb")

        if(title) {
          var result = {}
          result.title = title.innerText

          var rating = item.querySelector('.slp.f')

          if(rating) {
            result.rating = rating.innerText
          }

          var description = item.querySelector('.st')

          if (description) {
            result.description = description.innerText
          }

          var link = item.querySelector('.rc>.r>a');

          if (link)
            result.link = link.href;

          results.push(result);

        }

        results.push(result)
      }

      callback(results)
    }
  }
  xhr.send()
}