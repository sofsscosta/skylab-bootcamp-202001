const Results = require('./results')
const Search = require('./search')

module.exports = function (props = {}) {
    const { name, username, query = '', results, error } = props

    return `<section>
    ${name ? `<h1>Welcome, ${name}!</h1>`
            : `<section><a href="/register">Register</a> or <a href="/login">Login</a></section>`}
    
    ${Search({ query })}
    
    ${username ? `<form action="/logout" method="POST"><input type="hidden" value="${username}" name="username">
    <button>Logout</button>
</form>
<form action="/favourites/${name}" method="GET">
        <button type="submit">My favourites</button>
</form>` : ''}
    
</section>

${error ? `<p>${error}</p>` : ''}
${results ? Results({ results }) : ''}`
}
