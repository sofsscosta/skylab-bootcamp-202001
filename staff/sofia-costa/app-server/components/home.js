const Results = require('./results')
const Favourites = require('./favourites')

module.exports = function (props = {}) {
    const { name, username, query = '', results } = props

    return `<section>
    <h1>Welcome, ${name}!</h1>
    <h2>Search</h2>
    <form action="/search/" method="GET"><input type="text" name="query" value=${query}>
        <button type="submit">Search</button>
    </form>
    <form action="/logout" method="POST"><input type="hidden" value="${username}" name="username">
        <button>Logout</button>
    </form>
    <form action="/favourites/${name}" method="GET">
        <button type="submit">My favourites</button>
    </form>
</section>

${results ? Results({ results }) : ''}

`



}
