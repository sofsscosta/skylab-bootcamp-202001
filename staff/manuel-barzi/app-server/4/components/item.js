module.exports = function(props = {}) {
    const { item: { id, name, thumbnail, price, isFav } } = props

    return `<li class="results--item item">
        <h3>${name} <span>${isFav ? '💖' : '🤍'}</span></h3>
        <img src="${thumbnail}" />
        <span>${price} €</span>
    </li>`
}