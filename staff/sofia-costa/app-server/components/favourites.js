const Item = require('./item')

module.exports = function (props = {}) {
    const { results, error } = props

    return `<ul className="results">
    ${results ? results.map(result => Item({result})) : ''}
    ${error ?`<p>${error}</p>`:''}
</ul>`
}