function SignCookie() {

    return `<div>
    <h3>This site uses cookies!</h3>
    <form action="/accept-cookies" method="GET"><button type="submit">I accept</button></form>
</div>`
}

module.exports = SignCookie