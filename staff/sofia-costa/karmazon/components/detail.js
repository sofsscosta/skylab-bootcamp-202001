class Detail extends Component {
    constructor({details: {name, image, year, color, maker, collection, style, description, price, url}, style: {name: styleName, image: styleImage, url: styleUrl}}) {
        super(document.createElement('article'))

        const detail = this.container
        detail.classList.add('article')
    
        detail.innerHTML = '<div class="article__header"></div>'
        .concat('<div class="article__main"></div>')
    
        const header = detail.querySelector('.article__header')
        header.innerHTML = '<h3 class="title">' + name + '</h3>'
        .concat('<p class="go-back">x</p>')
    
        const main = detail.querySelector('.article__main')
        main.innerHTML = '<figure><img class="article__img" src ="' + image + '"></figure>'
        .concat('<ul class="article__container"></ul>')
    
        const list = detail.querySelector('ul')
        list.innerHTML = '<li><p class="article__year text">Year: ' + year + '</p></li>'
        .concat('<li><p class="article__color text">Color: ' + color + '</p></li>')
        .concat('<li><p class="article__maker text">Maker: ' + maker + '</p></li>')
        .concat('<li><p class="article__collection text">Collection: ' + collection + '</p></li>')
        .concat('<li><p class="article__style text">Style: ' + style + '</p></li>')
        .concat('<li><p class="article__description text">Descritpion: ' + description + '</p></li>')
        .concat('<li><p class="article__price text">Price: ' + price + '€</p></li>')
        .concat('<li><a class="article__url text" target="_blank" href="' + url + '">Click here to go to the article\'s page!</a></li>')
    
        const _style = document.createElement('p')
        const styleLink = document.createElement('a')
        styleLink.innerText = styleName
        styleLink.href = styleUrl
        _style.append(styleLink)
        const _styleImage = document.createElement('img')
        _styleImage.src = styleImage
        _style.append(_styleImage)
        detail.append(_style)

    }
}