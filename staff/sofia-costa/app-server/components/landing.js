const Home = require('./home')
const Results = require('./results')

module.exports = function (props = {}) {
    const { query, results } = props

    return `${Home({ query })}
    ${results ? Results({ results }) : ''}`
}