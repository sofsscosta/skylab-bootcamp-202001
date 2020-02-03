

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
// class Detail extends Component {
//     constructor(prop) {
//     super(document.createElement("section"))

//     const detail = this, container;
//     detail.classList.add("detail");

//     // var name = document.createElement("h2");
//     // name.innerText = prop.data.name;
//     // detail.append(name);
//     // var photo = document.createElement("img");
//     // photo.src = prop.image;
//     // var year = document.createElement("span");
//     // year.innerText = prop.year;
//     // var color = document.createElement("span");
//     // color.innerText = prop.color;
//     // var maker = document.createElement("span");
//     // maker.innerText = prop.maker;
//     // var collection = document.createElement("span");
//     // collection.innerText = prop.collection;
//     // var style = document.createElement("span");
//     // style.innerText = prop.style;
//     // var description = document.createElement("p");
//     // description.innerText = prop.description;
//     // var price = document.createElement("span");
//     // price.innerText = prop.price;

//     // detail.append(name, photo, year, color, maker, collection, style, description, price);

//     detail.innerHTML = "<h2>" + prop.name + "</h2>"
//     .concat ("<img src = " + prop.image + "> <br>")
//     .concat("<span>Year: " + prop.year + "</span><br>")
//     .concat("<span>Color: " + prop.color + "</span><br>")
//     .concat("<span>Maker: " + prop.maker + "</span><br>")
//     .concat("<span>Collection: " + prop.collection + "</span><br>")
//     .concat("<span>Style: " + prop.style + "</span><br>")
//     .concat("<p>Description: " + prop.description + "</p><br>")
//     .concat("<span>Price: " + prop.price + "€ </span>")
//     .concat("<button>volver</button><br><br>");

//     // var button = document.querySelector("button");
//     // button.addEventListener("click", function(event){
//     //     event.preventDefault();
//     //     //detail.container.replaceWith(ul);
//     //     props.onClick(props.detail.id);

//     // })

//     //return detail;
  
// }

// Detail.prototype = Object.create(Component.prototype);
// Detail.prototype.constructor = Detail;