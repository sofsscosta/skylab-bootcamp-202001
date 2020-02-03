class Details extends Component{
    constructor(response) {
        super(document.createElement('article'))
        const details = this.container
        
        details.classList.add('details')


        details.innerHTML = 
            `<div class="details__main">
                <h2 class="details__name">${response.name}</h2>
                <img class="details__photo" src="${response.image}"></img>
            </div>
            <div class="details__features">
                <span class="details__title-container">
                    <h3 class="details__features-title">Car specifications</h3>
                    <span class="details__close"><i class="fas fa-times-circle"></i></span>
                </span>
                <div class="details__features-list">
                    <p class="details__feature"><strong>Year:</strong> ${response.year}</p>
                    <p class="details__feature"><strong>Color:</strong> ${response.color.capitalize()}</p>
                    <p class="details__feature"><strong>Brand:</strong> ${response.maker.capitalize()}</p>
                    <p class="details__feature"><strong>Collection:</strong> ${response.collection.capitalize()}</p>
                    <p class="details__feature"><strong>Style:</strong> ${response.style.capitalize()}</p>
                    <p class="details__description"><strong>Description:</strong> ${response.description}</p>
                    <p class="details__feature"><strong>Price:</strong> ${response.price}$</p>
                    <a class="details__link" href="${response.url}" target="_blank">Go to the official site</a>
                </div>
            </div>`
    }
}