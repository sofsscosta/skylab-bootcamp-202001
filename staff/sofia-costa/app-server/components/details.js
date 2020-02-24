

module.exports=function (props={}) {
    const { result: { id, name, year, price, image, color, maker, collection, description, url, isFav }}=props
    return `<li>
        <h3>${name} (${year})</h3>
        <form action="/toggle-fav/${id}" method="POST">
            <button type="submit" name="isFav">
                <span>${isFav ? '💖' : '<3'}</span>
            </button>
        </form>
        <img src=${image} />
        <span>${price} €</span>
        <p>${color}</p>
        <p>${maker}</p>
        <p>${collection}</p>

        <p>${description}</p>
        <form action="/go-back" method="GET"><button>Go Back</button></form>
        <a href=${url}>click HERE!!!!</a>
    </li>`
}