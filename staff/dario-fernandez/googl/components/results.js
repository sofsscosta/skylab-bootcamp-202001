'use strict'


function createResults(selector, results) {
    var resultsList  = document.querySelector(selector)
    resultsList.innerHTML = ''
    results.forEach(function (element) {
        var resultItem = document.createElement('li')
        var title = document.createElement('h3')
        var link = document.createElement('a')
        link.target = '_blank'
        var rating = document.createElement('span')
        var description = document.createElement('p')
        title.innerText = element.title
        description.innerText = element.description
        link.href = element.link
        if(element.rating) {
            rating.innerText = element.rating
        }
        resultsList.appendChild(resultItem)
        resultItem.appendChild(link)
        if(element.rating) {
            resultItem.appendChild(rating)
        }
        resultItem.appendChild(description)
        link.appendChild(title)
    })

    resultsList.toggle = function() {
        this.classList.toggle('results--hide')
    }
    return results
}