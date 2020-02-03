class Detail extends Component {
    constructor({vehicle: { name, id, image, year, price, maker, collection, description, url}, style: {name: styleName, image: styleImage, url: styleUrl}}) {
        super(document.createElement('li'))
    
        const detail = this.container

    detail.classList.add('detail')

    const _name = document.createElement('h3')
    _name.innerText = `${name} - (Id#${id})`
    detail.append(_name)
    
    const figure = document.createElement('figure')
    const _image = document.createElement('img')
    _image.src = image
    figure.append(_image)
    detail.append(figure)

    const _price = document.createElement('span')
    _price.innerText = price + ' €'
    detail.append(_price)
    
    const _year = document.createElement('p')
    _year.innerText = `Year: ${year}`
    detail.append(_year)
    
    const _maker = document.createElement('p')
    _maker.innerText = `Maker: ${maker}`
    detail.append(_maker)
    
    const _collection = document.createElement('p')
    _collection.innerText = `Collection: ${collection}`
    detail.append(_collection)
    
    const style = document.createElement('p')
    const styleLink = document.createElement('a')
    styleLink.innerText = `Style: ${styleName}`
    styleLink.innerText = styleUrl
    style.append(styleLink)
    const _styleImage = document.createElement('img')
    _styleImage.src = styleImage
    style.append(_styleImage)
    detail.append(style)

    const _description = document.createElement('p')
    _description.innerText = `Description: ${description}`
    detail.append(_description)

    const link = document.createElement('a')
    link.href = url
    link.innerText = `Link to URL: ${url}`
    detail.append(link)

    }
}