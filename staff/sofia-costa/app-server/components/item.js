const Details = require('./details')

module.exports=function (props={}) {
    const { item: { id, name, thumbnail, price, isFav }}= props
    return `<li class="item">
        <h3 class="item__name item__info">${name}</h3>
        <form action="/toggle-fav/${id}" method="POST">
            <button type="submit" name="isFav">
                <span class="fav"">${isFav ? '❤' : '♡'}</span>
            </button>
        </form>
        <form action='/details/${id}' method='GET'>
        <button type='submit'name='id'>
        <img class="item__img" src=${thumbnail}>
        </button>
        </form>
        <span class="item__price item__info">${price} €</span>
    </li>`
}