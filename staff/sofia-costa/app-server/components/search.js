module.exports = function (props = {}) {
    const { query='' } = props

    return `<h2>Search</h2>
<form action="/search/" method="GET"><input type="text" name="query" value=${query}>
    <button type="submit">Search</button>
</form>`
}