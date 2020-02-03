class Detail extends Component {
    constructor({results: { name, year, price, image, color, maker, collection, description, url }, onClick}) {
        super(document.createElement('article'))

        const detail = this.container

        detail.classList.add("detail")

        const _title = document.createElement("h3")
        _title.innerText += name 
        detail.append(_title)

        const _figure = document.createElement('figure')
        const _image = document.createElement('img')
        _image.src = image
        _figure.append(_image)
        detail.append(_figure)

        const _year = document.createElement("span")
        _year.classList.add('year')
        _year.innerText = year
        detail.append(_year)

        const _maker = document.createElement("span")
        _maker.classList.add('maker')
        _maker.innerText = maker
        detail.append(_maker)

        const _collection = document.createElement("span")
        _collection.classList.add('collection')
        _collection.innerText = collection
        detail.append(_collection)

        // const _style = document.createElement("span")
        // _style.classList.add('style')
        // _style.innerText = style
        // detail.append(_style)

        const _description = document.createElement('p')
        _description.innerText = description
        detail.append(_description)

        const _link = document.createElement("a")
        _link.href = url
        _link.innerText = url
        detail.append(_link)

        const _back = document.createElement('button')
        _back.innerText = "X"
        detail.append(_back)


        _back.addEventListener('click', function (event) {
            event.preventDefault()

            onClick()
        })

    }
}