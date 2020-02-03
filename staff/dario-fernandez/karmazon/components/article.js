'use strict'

function Article(result, onClick) {
    var article = document.createElement('li')
    article.classList.add('article')

    Component.call(this, article)

    article.innerHTML = '<h3 class="article__name">' + result.name + '</h3>'
        .concat('<img class="article__photo" src="' + result.thumbnail + '"></img>')
        .concat('<span class="article__price">' + result.price + '$</span>')
        //.concat('<span>' + result.id + '</span>')

    article.querySelector('img').addEventListener('click', function() {
        var id = result.id

        onClick(id)
    })

    article.querySelector('h3').addEventListener('click', function() {
        var id = result.id

        onClick(id)
    })
}

Article.prototype = Object.create(Component.prototype)
Article.prototype.constructor = Article