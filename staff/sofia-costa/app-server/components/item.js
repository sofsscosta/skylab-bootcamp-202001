const Details = require('./details')

module.exports=function (props={}) {
    const { item: { id, name, thumbnail, price, isFav }}= props
    return `<li className="results--item item">
        <h3>${name}</h3>
        <form action="/toggle-fav/${id}" method="POST">
            <button type="submit" name="isFav">
                <span>${isFav ? '💖' : '<3'}</span>
            </button>
        </form>
        <form action='/details/${id}' method='GET'><button type='submit'name='id'><img src=${thumbnail}></button></form>
        <span>${price} €</span>
    </li>`
}