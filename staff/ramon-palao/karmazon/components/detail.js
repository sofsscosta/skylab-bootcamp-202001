class Detail extends Component{
    constructor({ vehicle: { name, year, price, image, color, maker, collection, description, style } }){

        super(document.createElement("section"))

        const detail = this.container

        detail.classList.add("detail-info");

        detail.innerHTML = `<h2 class = detail-info__title>${name}</h2>
        <img src = ${image} class = detail-info__image> </br>
        <p class = detail-info__year> Year: ${year}</p> </br>
        <p class = detail-info__color> Color: ${color}</p> </br>
        <p class = detail-info__maker> Maker: ${maker}</p> </br>
        <p class = detail-info__collection> Collection: ${collection}</p> </br>
        <p class = detail-info__style> Style: ${style}</p> </br>
        <p class = detail-info__description> Description: ${description}</p>
        <p class = detail-info__price> Price : ${price}${"€"}</p> </br></br>
        <button class = detail-info__button>GO BACK</button>`
        
    }
}