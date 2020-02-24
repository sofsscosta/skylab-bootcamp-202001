module.exports=function (props={}) {
    const { result: { id, name, year, price, image, color, maker, collection, description, url, isFav }}=props
    return `<li class = "details">
        <h3 class="details__title">${name} (${year})</h3>
        <form action="/toggle-fav/${id}" method="POST">
            <button type="submit" name="isFav">
                <span class="fav">${isFav ? '❤' : '♡'}</span>
            </button>
        </form>
        <div class="details__container">
            <img class="details__img" src=${image} />
            <div class="details__text-container">
                <span class="details__text">${price} €</span>
                <p class="details__text">${color}</p>
                <p class="details__text">${maker}</p>
                <p class="details__text">${collection}</p>

                <p class="details__text">${description}</p>
                <form action="/go-back" method="GET"><button>Go Back</button></form>
                <a href=${url} class="details__title">click HERE!!!!</a>
            </div>
        </div>
    </li>`
}