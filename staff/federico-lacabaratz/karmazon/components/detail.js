class Detail extends Component {
    constructor({vehicle: { name, id, image, year, price, description, url}, style: {name: styleName, image: styleImage, url: styleUrl}, maker: {name: makerName, url: makerUrl }, collection: {name: collectionName, image: collectionImage, url: collectionUrl}}) {
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
    const _makerLink = document.createElement('a')
    _maker.innerText = `Maker: `
    _makerLink.innerText = makerName
    _makerLink.href = makerUrl
    _maker.append(_makerLink)
    detail.append(_maker)
    
    const _collection = document.createElement('p')
    const _collectionLink = document.createElement('a')
    _collection.innerText = `Collection: `
    _collectionLink.innerText = collectionName
    _collectionLink.href = collectionUrl
    _collection.append(_collectionLink)
    const _collectionImage = document.createElement('img')
    _collectionImage.src = collectionImage
    _collectionImage.href = collectionUrl
    _collectionLink.append(_collectionImage)
    detail.append(_collection)
    
    const style = document.createElement('p')
    const styleLink = document.createElement('a')
    style.innerText = `Style: `
    styleLink.innerText = styleName
    styleLink.href = styleUrl
    style.append(styleLink)
    const _styleImage = document.createElement('img')
    _styleImage.src = styleImage
    _styleImage.href = styleImage
    styleLink.append(_styleImage)
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