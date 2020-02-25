const Item = require('./item')

module.exports=function({ results, error }) {
    return `<ul class="results">
        ${error ?`<p class="results_error">${error}</p>`:''}
        ${results ? results.map(item=>Item({item})).join('') :''}
    </ul>`

}