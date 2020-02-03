class Detail extends Component {
    constructor({ product: { name, image, year, color, maker, collection, style, description }, backToResults }) {
        super(document.createElement('section'))
        const detail = this.container

        detail.classList.add('details')

        detail.innerHTML = `<div class="details__intro">
            <a class="details__exit" href="#"> << Back to results</a>
            <h2 class="details__car-name">${name}</h2>
            <div class="details__img-container">
            <img class="details__img" src='${image}' alt=""></div></div>
            <div class="details__main"><h2>Car specs</h2>
            <ul class="details__container">
            <li class="details__detail"><div class="year"><h5>Year</h5><p>${year}</p></div></li>
            <li class="details__detail color maker"><div class="color"><h5>COLOR</h5><p>${color}</p></div>
            <div class="maker"><h5>MAKER</h5><p>${maker}</p></div></li>
            <li class="details__detail collection"><h5>Collection</h5><p>${collection}</p></li>
            <li class="details__detail style"><h5>STYLE</h5><p>${style}</p></li>
            <li class="details__detail description"><h5>Description</h5>${description}</li>
            </ul ></div >`

        const exitLink = detail.querySelector('.details__exit');

        exitLink.addEventListener('click', event => {
            event.preventDefault();
            backToResults();
        });

    }
}

