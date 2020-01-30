function search(url, resultsSelector, titleSelector, descriptionSelector, linkSelector, callback){
    if(typeof url !== 'string') throw new (TypeError, url + ' is not a string');
    if(typeof callback !== 'function') throw new (TypeError, callback + ' is not a function');

     {
       
    call('https://skylabcoders.herokuapp.com/proxy?url=')
    if ( this.status === 200)
    var doc = new DOMParser().parseFromString(this.responseText, 'text/html')

    var items = doc.querySelectorAll(resultsSelector)

    var results = []

    for (var i = 0; i < items.length; i++) {
        var item = items[i]

        var title = item.querySelector(titleSelector)

        if (title) {
            var result = {}

            result.title = title.innerText

            /*var rating = item.querySelector('.slp.f')

            if (rating) {
                result.rating = rating.innerText
            }*/

            var description = item.querySelector(descriptionSelector);
            if (description) {
                result.description= description.innerText
            }  
            var url = item.querySelector(linkSelector);
            // if (!url){
            //     url=item.querySelector('a');
            // }
            result.link = url.href.trim();                  
        }
     

        results.push(result)
    }
               

    callback(results)
}
}




