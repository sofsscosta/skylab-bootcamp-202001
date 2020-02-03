class Search extends Interactive {
    constructor({ title, onSubmit }) {
        super(document.createElement('form'))

        const search = this.container

        search.classList.add('search')

        search.innerHTML = `<h2>${title.toUpperCase()}</h2>
            <input type="text" name="query" placeholder="Type here to search for cars...">
            <button type="submit">SEARCH</button>`

        search.addEventListener('submit', function (event) {
            event.preventDefault()

            const query = this.query.value

            onSubmit(query)
        })
    }

    __locateFeedbackInContainer__(feedback) {
        this.container.append(feedback.container)
    }
}