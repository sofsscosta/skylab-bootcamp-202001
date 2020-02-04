class Detail extends Component {
    constructor({ vehicle: { name, year, price, image, color, maker, collection, description, url }, style: { name: styleName, image: styleImage, url: styleUrl } }) {
        super(document.createElement('li'))

        const detail = this.container

        const _name = document.createElement('h3')
        _name.innerText = name + ' (' + year + ')'
        detail.append(_name)

        const _image = document.createElement('img')
        _image.src = image
        detail.append(_image)

        const _price = document.createElement('span')
        _price.innerText = price + ' €'
        detail.append(_price)

        const _color = document.createElement('p')
        _color.innerText = color
        detail.append(_color)

        const _maker = document.createElement('p')
        _maker.innerText = maker
        detail.append(_maker)

        const _collection = document.createElement('p')
        _collection.innerText = collection
        detail.append(_collection)

        const style = document.createElement('p')
        const styleLink = document.createElement('a')
        styleLink.innerText = styleName
        styleLink.href = styleUrl
        style.append(styleLink)
        const _styleImage = document.createElement('img')
        _styleImage.src = styleImage
        style.append(_styleImage)
        detail.append(style)

        const _description = document.createElement('p')
        _description.innerText = description
        detail.append(_description)

        const link = document.createElement('a')
        link.innerText = url
        link.href = url
        detail.append(link)
    }
}