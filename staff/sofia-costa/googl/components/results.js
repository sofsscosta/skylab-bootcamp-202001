function createResults (selector, results) {

    var list = document.querySelector(selector)
    list.innerHTML = ''

    results.forEach(function(result) {

        var item = document.createElement('li')
        var title = document.createElement('h3')

        var link = document.createElement('a')
        link.innerText = result.link
        link.target = '_blank';
        link.href = result.link;

        if (result.description !== undefined && result.description !== null) {
            var description = document.createElement('p')
            description.innerText = result.description
        }
        if(result.rating !== undefined) {
            var description = document.createElement('p')
            description.innerText = result.description
        }

        title.innerText = result.title

        list.appendChild(item)
        item.appendChild(title)
        item.appendChild(link)
        if (description!==undefined && description!==null) item.appendChild(description)

    })
    return list
}