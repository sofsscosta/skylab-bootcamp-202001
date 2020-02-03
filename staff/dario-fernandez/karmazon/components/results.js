'use strict'


function Results(props) {
    var list  = document.createElement('ul')
    list.classList.add('list')

    Component.call(this, list)
    
    props.results.forEach(function (element) {
        var article = new Article(element, props.onClick)

        list.appendChild(article.container)
    })

    
}

Results.prototype = Object.create(Component.prototype)
Results.prototype.constructor = Results